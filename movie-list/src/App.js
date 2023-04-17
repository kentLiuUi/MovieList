import { Route, Routes, Link } from "react-router-dom";
import BlockedMoviesPage from "./containers/BlockedMoviesPage";
import { useEffect } from "react";
import { API_URL, API_KEY } from "./constants";
import { connect } from "react-redux";
import { addMovies } from "./actionCreators";

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
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blocked">Books</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<div>homePage</div>} />
        <Route path="/blocked" element={<BlockedMoviesPage />} />
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
