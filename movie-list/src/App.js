import { Route, Routes, Link } from "react-router-dom";
import BlockedMoviesPage from "./containers/BlockedMoviesPage";
import LikedMoviesPage from "./containers/LikedMoviesPage";
import { useEffect } from "react";
import { API_URL, API_KEY } from "./constants";
import { connect } from "react-redux";
import { addMovies } from "./actionCreators";
import HomePage from "./HomePage";

const App=({addMovies}) =>{
  useEffect(()=>{
    let fetchData = async ()=>{
      let res = await fetch(`${API_URL}${API_KEY}&&page=1`);
      // console.log(`${API_URL}${API_KEY}&&page=1`)
      let data = await res.json();
      console.log(data);

      addMovies(data);
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
      </Routes>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMovies: (moviesData) => dispatch(addMovies(moviesData)),
  };
};

export default connect(null, mapDispatchToProps)(App);
