import { Route, Routes, Link } from "react-router-dom";
import BlockedMoviesPage from "./containers/BlockedMoviesPage";
import LikedMoviesPage from "./containers/LikedMoviesPage";
import { useEffect } from "react";
import { API_URL, API_KEY, MOVIE_GENRE_URL, GENRE_COLORS, TV_GENRE_URL } from "./constants";
import { connect } from "react-redux";
import { addMovies, addGenreList } from "./actionCreators";
import HomePage from "./HomePage";
import DetailPage from './containers/DetailPage/components/DetailPageContainer';

const App=({addMovies, genreList, addGenreList}) =>{
  useEffect(()=>{
    let fetchData = async ()=>{
      let res = await fetch(`${API_URL}${API_KEY}&&page=1`);
      // console.log(`${API_URL}${API_KEY}&&page=1`)
      let data = await res.json();
      // console.log(data);

      addMovies(data);
      
      // if(Object.keys(movieGenreList).length === 0){


      //   // for(let [index, value] of dataMovieGenre.genres.entries()){
      //   //   let tempList ={};
      //   //   tempList['name'] = value.name;
      //   //   tempList['color'] = MOVIE_GENRE_COLORS[index];
      //   //   addGenre('movie')
      //   // }
      // }
  

      let resMovieGenre = await fetch(`${MOVIE_GENRE_URL}${API_KEY}&language=en-US`);
      let dataMovieGenre = await resMovieGenre.json();
      // console.log(dataMovieGenre);

      let resTvGenre = await fetch(`${TV_GENRE_URL}${API_KEY}&language=en-US`);
      let dataTvGenre = await resTvGenre.json();
      // console.log(dataTvGenre);
      
      let tempGenreList = [...dataMovieGenre.genres,...dataTvGenre.genres];
      tempGenreList = tempGenreList.reduce((acc, curr, index)=>{
        if(!acc[curr.id]){
          curr['color'] = GENRE_COLORS[index];
          acc[curr.id] = curr;
        }
        return acc
      }, {})
      // console.log(tempGenreList)
      // console.log(Object.keys(tempGenreList).length)
      addGenreList(tempGenreList);
      
      

    }
    fetchData()
    .catch(err=>console.log(err))
  }, [])

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<div><HomePage/></div>} /> */}
        {/* <Route path="/" element={<BlockedMoviesPage />} /> */}
        <Route path='/' element={
          <HomePage/>
        } />
        <Route path='/blocked' element={
          <HomePage>
            <BlockedMoviesPage />
          </HomePage>
        } />
        <Route path='/liked' element={
          <HomePage>
            <LikedMoviesPage />
          </HomePage>
        }/>
        <Route path='/detail' element={
          <HomePage>
            {/* <DetailPage /> */}
          </HomePage>
        }/>

      </Routes>
    </>
  );
};

const mapStatesToProps = (state) => ({
  genreList: state.moviesPageReducer.genreList
})

const mapDispatchToProps = (dispatch) => {
  return {
    addMovies: (moviesData) => dispatch(addMovies(moviesData)),
    addGenreList: (genreList) => dispatch(addGenreList(genreList))
  };
};

export default connect(mapStatesToProps, mapDispatchToProps)(App);
