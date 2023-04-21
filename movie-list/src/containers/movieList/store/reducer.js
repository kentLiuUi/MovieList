import initialState from './store';
import { ADD_MOVIES, ADD_LIKED_MOVIE, REMOVE_LIKED_MOVIE, ADD_BLOCKED_MOVIE, REMOVE_BLOCKED_MOVIE } from '../../../constants';

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MOVIES:
            // console.log("ADD_MOVIES action", action);
            return {
                ...state,
                movies: {   
                    ...state.movies,
                    ...action.payload
                }

            };
        case ADD_LIKED_MOVIE: {
            // console.log("ADD_LIKED_MOVIE action", action);
            // console.log("ADD_LIKED_MOVIE state", state);
            return {
                ...state,
                likedMovies: {
                    ...state.likedMovies,
                    [action.movieId]: action.movie
                }
            }
        }
        case REMOVE_LIKED_MOVIE: {
            let updatedLikedMovies = state.likedMovies;
            delete updatedLikedMovies[action.movieId];
            return {
                ...state,
                // blockedMovies: updatedBlockedMovies,
                likedMovies: {
                    ...updatedLikedMovies
                },
            }
        }
        case ADD_BLOCKED_MOVIE: {
            // console.log("ADD_BLOCKED_MOVIE action", action);
            // console.log("ADD_BLOCKED_MOVIE state", state);
            return {
                ...state,
                blockedMovies: {
                    ...state.blockedMovies,
                    [action.movieId]: action.movie
                }
            }
        }
        case REMOVE_BLOCKED_MOVIE: {
            let updatedBlockedMovies = state.blockedMovies;
            delete updatedBlockedMovies[action.movieId];

            return {
                ...state,
                // blockedMovies: updatedBlockedMovies,
                blockedMovies: {
                    ...updatedBlockedMovies
                },
            }
        }

        case "ADD_GENRE_LIST":{
            return{
                ...state,
                genreList: {
                    ...action.genreList
                }
            }
        }

        // case "REMOVE_BLOCKED_MOVIE":{
        //     let updatedBlockedMovies = state.blockedMovies;
        //     delete updatedBlockedMovies[action.movieId];

        //     return {
        //         ...state,
        //         // blockedMovies: updatedBlockedMovies,
        //         blockedMovies: {
        //             ...updatedBlockedMovies
        //         },
        //     }
        // }
        // case "REMOVE_LIKED_MOVIE":{
        //     let updatedLikedMovies = state.likedMovies;
        //     delete updatedLikedMovies[action.movieId];

        //     return {
        //         ...state,
        //         // blockedMovies: updatedBlockedMovies,
        //         likedMovies: {
        //             ...updatedLikedMovies
        //         },

        //     }
        // }
        // case "ADD_LIKED_MOVIE":{
        //     console.log("1111 ADD_LIKED_MOVIE action", action);
        //     console.log("1111 ADD_LIKED_MOVIE state", state);
        //     return{
        //         ...state,

        //         likedMovies:{
        //             ...state.likedMovies,
        //             [action.movieId]: state.movies[action.movieId]
        //         }
        //     }
        // }
        // case "ADD_BLOCKED_MOVIE":{
        //     return{
        //         ...state,
        //         blockedMovies:{
        //             ...state.blockedMovies,
        //             [action.movieId]: state.movies[action.movieId]
        //         }
        //     }
        // }

        default:
            return state;
    }
};

export default moviesReducer;
