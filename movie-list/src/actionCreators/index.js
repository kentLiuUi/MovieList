export const addMovies = (payload) => ({
    type: 'ADD_MOVIES',
    payload
})

export const addLikedMovie = (movieId, movie) => ({
    type: "ADD_LIKED_MOVIE",
    movieId,
    movie
})

export const addBlockedMovie = (movieId, movie) => ({
    type: "ADD_BLOCKED_MOVIE",
    movieId,
    movie
})

export const removeBlockedMovie = (movieId) => ({
    type: "REMOVE_BLOCKED_MOVIE",
    movieId
})

export const removeLikedMovie = (movieId) => ({
    type: "REMOVE_LIKED_MOVIE",
    movieId
})

export const addGenreList = (genreList) =>({
    type: "ADD_GENRE_LIST",
    genreList
})