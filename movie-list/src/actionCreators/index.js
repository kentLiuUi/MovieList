export const addMovies = (payload) => ({
    type: 'ADD_MOVIES',
    payload
})

export const addLikedMovie = (movieId) => ({
    type: "ADD_LIKED_MOVIE",
    movieId
})

export const addBlockedMovie = (movieId) => ({
    type: "ADD_BLOCKED_MOVIE",
    movieId
})

export const removeBlockedMovie = (movieId) => ({
    type: "REMOVE_BLOCKED_MOVIE",
    movieId
})

export const removeLikedMovie = (movieId) => ({
    type: "REMOVE_LIKED_MOVIE",
    movieId
})