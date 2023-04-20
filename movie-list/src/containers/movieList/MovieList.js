import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { connect } from "react-redux";
import "./MovieList.css";
import { ADD_MOVIES, ADD_LIKED_MOVIE, REMOVE_LIKED_MOVIE, ADD_BLOCKED_MOVIE, REMOVE_BLOCKED_MOVIE } from '../../constants';
import { actions } from './store/actionCreator';

const MovieList = (props) => {
    // const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState("popularity.desc");

    console.log("MovieList_props", props)

    // update the list of movies when the page number or sort option changes
    useEffect(() => {
        // load the movies from the api only if the page is not already loaded
        for (let page in props.movies.movies) {
            // console.log("page", page, "currentPage", currentPage);
            if ('page_' + currentPage === page) {
                return;
            }
        }
        // get the list of movies from the api
        props.getMovies(sortBy, currentPage);
    }, [sortBy, currentPage]);

    // page number changes
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // sort option changes
    const handleSortChange = (sortOption) => {
        if (sortBy === `${sortOption}.desc`) {
            setSortBy(`${sortOption}.asc`);
        } else if (sortBy === `${sortOption}.asc`) {
            setSortBy(`${sortOption}.desc`);
        } else {
            setSortBy(`${sortOption}.desc`);
        }
    };

    // render the list of movies
    const renderMovies = () => {
        // console.log("props.movies.movies ", props.movies);
        for (let page in props.movies) {
            // console.log(`${page}: ${props.movies.movies[page]}`);
            // console.log("page", page, "currentPage", currentPage);
            if (page === 'page_' + currentPage) {
                return props.movies[page].map((movie) => <MovieCard key={movie.id} movie={movie} 
                addLikedMovie={props.addLikedMovie} removeLikedMovie={props.removeLikedMovie} 
                addBlockedMovie={props.addBlockedMovie} removeBlockedMovie={props.removeBlockedMovie} />);
            }
        }
        return <p>Loading</p>;
    }



// render MovieList component
return (
    <div>
        <div className="sort">
            <button
                onClick={() => handleSortChange("title")}
            >
                title
            </button>
            <button
                onClick={() => handleSortChange("vote_count")}
            >
                Vote Count
            </button>
            <button
                onClick={() => handleSortChange("vote_average")}
            >
                Vote Average
            </button>
            <button
                onClick={() => handleSortChange("release_date")}
            >
                Release Date
            </button>
        </div>
        <div className="grid">{renderMovies()}</div>
        <div className="pagination">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Prev
            </button>
            <span>{currentPage}</span>
            <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
        </div>
    </div>
);
};

// send data from store to component
const mapStateToProps = (state) => {
    // console.log("MoviList state", state);
    return {
        movies: state.movieList.movies,
        likedMovies: state.movieList.likedMovies,
        blockedMovies: state.movieList.blockedMovies,
    }
}

// send action to reducer
const mapDispatchToProps = (dispatch) => {
    return {
        getMovies: (sortBy, currentPage) => dispatch(actions.getMovies(sortBy, currentPage)),
        addLikedMovie: (movieID,movie) => dispatch(actions.addLikedMovie(movieID,movie)),
        removeLikedMovie: (movieID) => dispatch(actions.removeLikedMovie(movieID)),
        addBlockedMovie: (movieID,movie) => dispatch(actions.addBlockedMovie(movieID,movie)),
        removeBlockedMovie: (movieID) => dispatch(actions.removeBlockedMovie(movieID)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
