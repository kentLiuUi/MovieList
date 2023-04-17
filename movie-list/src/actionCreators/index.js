export const addMovies = (payload) => ({
    type: 'ADD_MOVIES',
    payload
})

export const addLikedMovies = (payload) => ({
    
})

export const removeBlockedMovie = (movieId) => ({
    type: "REMOVE_BLOCKED_MOVIE",
    movieId
})