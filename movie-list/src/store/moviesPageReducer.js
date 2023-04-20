const initialState = {
    page: 0,
    movies: {},
    likedMovies: {},
    blockedMovies: {},
    genreList:{},
}

const moviesPageReducer = (state=initialState, action) => {
    switch(action.type) {
        // case "ADD_MOVIES":{
        //     let newMovies ={}
        //     for(let item of action.payload.results){
        //         newMovies[item.id] = item
        //     }
        //     return {
        //         ...state,
        
        //         page: action.payload.page,
        //         movies:{
        //             ...state.movies,
        //             ...newMovies
        //         },
        //         likedMovies:{
        //             ...state.likedMovies,
        //             ...newMovies,
        //         },
        //         blockedMovies:{
        //             ...state.likedMovies,
        //             ...newMovies,
        //         },
        //     }
        // }

        case "REMOVE_BLOCKED_MOVIE":{
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
        case "REMOVE_LIKED_MOVIE":{
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
        case "ADD_LIKED_MOVIE":{
            console.log("1111 ADD_LIKED_MOVIE action", action);
            console.log("1111 ADD_LIKED_MOVIE state", state);
            return{
                ...state,

                likedMovies:{
                    ...state.likedMovies,
                    [action.movieId]: state.movies[action.movieId]
                }
            }
        }
        case "ADD_BLOCKED_MOVIE":{
            return{
                ...state,
                blockedMovies:{
                    ...state.blockedMovies,
                    [action.movieId]: state.movies[action.movieId]
                }
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
        default:
            return state
    }
}

export default moviesPageReducer; 