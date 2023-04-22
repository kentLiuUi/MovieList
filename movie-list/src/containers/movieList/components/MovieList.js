import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import MovieCard from "./MovieCard";
import { connect } from "react-redux";
import "../MovieList.sass";
import { ADD_MOVIES, ADD_LIKED_MOVIE, REMOVE_LIKED_MOVIE, ADD_BLOCKED_MOVIE, REMOVE_BLOCKED_MOVIE } from '../../../constants';
import { actions } from '../store/actionCreator';

const MovieList = (props) => {
    // const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState("popularity.desc");

    MovieList.propTypes = {
        movies: PropTypes.object.isRequired,
        likedMovies: PropTypes.object.isRequired,
        blockedMovies: PropTypes.object.isRequired,
        getMovies: PropTypes.func.isRequired,
        addLikedMovie: PropTypes.func.isRequired,
        removeLikedMovie: PropTypes.func.isRequired,
        addBlockedMovie: PropTypes.func.isRequired,
        removeBlockedMovie: PropTypes.func.isRequired,
    };

    console.log("MovieList_props", props)

    useEffect(() => {
        for (let page in props.movies) {
            if ('page_' + currentPage === page) {
                return;
            }
        }
        props.getMovies(sortBy, currentPage);
    }, [currentPage]);

    useEffect(() => {
        props.getMovies(sortBy, currentPage);
    }, [sortBy]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSortChange = (sortOption) => {
        if (sortBy === `${sortOption}.desc`) {
            setSortBy(`${sortOption}.asc`);
        } else if (sortBy === `${sortOption}.asc`) {
            setSortBy(`${sortOption}.desc`);
        } else {
            setSortBy(`${sortOption}.desc`);
        }
    };

    const renderMovies = () => {
        for (let page in props.movies) {
            if (page === 'page_' + currentPage) {
                return props.movies[page].map((movie) => <MovieCard key={movie.id} movie={movie}
                    likedMovies={props.likedMovies} blockedMovies={props.blockedMovies}
                    addLikedMovie={props.addLikedMovie} removeLikedMovie={props.removeLikedMovie}
                    addBlockedMovie={props.addBlockedMovie} removeBlockedMovie={props.removeBlockedMovie} />);
            }
        }
        return <p>Loading</p>;
    }


    return (
        <div>
            <div className="pagination">
                <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Prev
                </button>
                <span>{currentPage}</span>
                <button className="btn btn-primary btn-sm" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
            </div>
            <div className="movieList_sort">
                <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleSortChange("title")}
                >
                    title
                </button>
                <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleSortChange("vote_count")}
                >
                    Vote Count
                </button>
                <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleSortChange("vote_average")}
                >
                    Vote Average
                </button>
                <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleSortChange("release_date")}
                >
                    Release Date
                </button>
            </div>
            <div className="grid">{renderMovies()}</div>

        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        movies: state.movieList.movies,
        likedMovies: state.movieList.likedMovies,
        blockedMovies: state.movieList.blockedMovies,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovies: (sortBy, currentPage) => dispatch(actions.getMovies(sortBy, currentPage)),
        addLikedMovie: (movieID, movie) => dispatch(actions.addLikedMovie(movieID, movie)),
        removeLikedMovie: (movieID) => dispatch(actions.removeLikedMovie(movieID)),
        addBlockedMovie: (movieID, movie) => dispatch(actions.addBlockedMovie(movieID, movie)),
        removeBlockedMovie: (movieID) => dispatch(actions.removeBlockedMovie(movieID)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);