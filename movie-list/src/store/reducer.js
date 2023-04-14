const initialState = {
    page: 0,
    movies: {},
    likedMovies: {},
    blockedMovies: {}
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case "ADD_MOVIES":
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
                blockedMovies:{},
            }

 
        default:
            return state
    }
}

export default reducer; 