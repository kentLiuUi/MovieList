import axios from 'axios';
import { ADD_MOVIES, ADD_LIKED_MOVIE, REMOVE_LIKED_MOVIE, ADD_BLOCKED_MOVIE, REMOVE_BLOCKED_MOVIE } from '../../../constants';

const addMovies = (movies, page) => ({
    type: ADD_MOVIES,
    payload: {
        ['page_' + page]: movies
    }
});

const addLikedMovie = (movieId, movie) => ({
    type: ADD_LIKED_MOVIE,
    movieId,
    movie
});

const removeLikedMovie = (movieId) => ({
    type: REMOVE_LIKED_MOVIE,
    movieId,
});

const addBlockedMovie = (movieId, movie) => ({
    type: ADD_BLOCKED_MOVIE,
    movieId,
    movie
});

const removeBlockedMovie = (movieId) => ({
    type: REMOVE_BLOCKED_MOVIE,
    movieId,
});


// thunk - get data from api
const getMovies = (sortBy, currentPage) => {
    return (dispatch) => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=${sortBy}&api_key=7c4e9e0e8e7fed763462345482266ea3&page=${currentPage}`)
            .then((response) => {
                console.log("response.data.results", response.data.results, currentPage);
                dispatch(addMovies(response.data.results, currentPage))
            })
    }
}

export const actions = {
    addMovies,
    getMovies,
    addLikedMovie,
    removeLikedMovie,
    addBlockedMovie,
    removeBlockedMovie,
};