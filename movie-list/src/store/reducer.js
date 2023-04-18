const initialState = {
    page: 0,
    movies: {},
    likedMovies: {},
    blockedMovies: {},
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case "ADD_MOVIES":{
            let newMovies ={}
            for(let item of action.payload.results){
                newMovies[item.id] = item
            }
            return {
                ...state,
                page: action.payload.page,
                movies:{
                    ...state.movies,
                    ...newMovies
                },
                likedMovies:{
                    ...state.likedMovies,
                    ...newMovies,
                },
                blockedMovies:{
                    ...state.likedMovies,
                    ...newMovies,
                },
            }
        }

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
 
        default:
            return state
    }
}

export default reducer; 