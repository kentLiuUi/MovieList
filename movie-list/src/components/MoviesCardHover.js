import {connect} from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faHeart, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { removeBlockedMovie, removeLikedMovie, addLikedMovie, addBlockedMovie } from '../actionCreators';



const MoviesCardHover =({pageType, movieId, movies, likedMovies, blockedMovies, removeBlockedMovie, removeLikedMovie, addLikedMovie, addBlockedMovie}) => {
    const likeMovie = (movieId,movies, likedMovies, blockedMovies) => {
        // console.log('moviesCardHover', likedMovies);
        // console.log('likedMovies', likedMovies);
        // console.log('blockedMovies', blockedMovies);

        removeBlockedMovie(movieId);
        if(!likedMovies.hasOwnProperty(movieId)){
            addLikedMovie(movieId)
        }else{
            console.log("Movie already exists in liked movies list"); 
        }
    }
    const blockMovie = (movieId,movies, likedMovies, blockedMovies) => {
        // console.log('movies', movies);
        // console.log('likedMovies', likedMovies);
        // console.log('blockedMovies', blockedMovies);
        removeLikedMovie(movieId);
        if(!blockedMovies.hasOwnProperty(movieId)){
            addBlockedMovie(movieId)
        }else{
            console.log("Movie already exists in blocked movies list");
        }
    }

    switch (pageType) {
        case 'liked':{
            return(
                <div className='likedMoviesCardHover moviesCardHover'>
                    <FontAwesomeIcon title="like this movie" onClick={()=>blockMovie(movieId, movies, likedMovies, blockedMovies)} icon={faBan} style={{ color: "#ffffff" }}/>
                    <FontAwesomeIcon title="remove from blocked movies list" onClick={()=>removeLikedMovie(movieId)} icon={faTrashCan} style={{ color: "#ffffff" }}/>
                </div>
            )
        }
        case 'blocked':{
            return(
                <div className='blockedMoviesCardHover moviesCardHover'>
                    <FontAwesomeIcon title="like this movie" onClick={()=>likeMovie(movieId, movies, likedMovies, blockedMovies)} icon={faHeart} style={{ color: "#ffffff" }}/>
                    <FontAwesomeIcon title="remove from blocked movies list" onClick={()=>removeBlockedMovie(movieId)} icon={faTrashCan} style={{ color: "#ffffff" }}/>
                </div>
            )
        }
        default:
            return;

    }

}

const mapStatesToProps = (state) => ({
    movies: state.moviesPageReducer.movies,
    blockedMovies: state.moviesPageReducer.blockedMovies,
    likedMovies: state.moviesPageReducer.likedMovies,
})

const mapDispatchToProps = (dispatch) => ({
    removeLikedMovie: (movieId) =>dispatch(removeLikedMovie(movieId)),
    removeBlockedMovie: (movieId) =>dispatch(removeBlockedMovie(movieId)),
    addLikedMovie: (movieId) =>dispatch(addLikedMovie(movieId)),
    addBlockedMovie: (movieId) =>dispatch(addBlockedMovie(movieId))
})

export default connect(mapStatesToProps, mapDispatchToProps)(MoviesCardHover);