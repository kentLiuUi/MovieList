import {connect} from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faHeart, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { removeBlockedMovie, removeLikedMovie, addLikedMovie, addBlockedMovie } from '../actionCreators';
import PropTypes from "prop-types";


const MoviesCardHover =({pageType, movieId, movies, likedMovies, blockedMovies, removeBlockedMovie, removeLikedMovie, addLikedMovie, addBlockedMovie}) => {
    const likeMovie = (movieId,movies, likedMovies, blockedMovies) => {
        // console.log('moviesCardHover', likedMovies);
        // console.log('likedMovies', likedMovies);
        // console.log('blockedMovies', blockedMovies);


        if(!likedMovies.hasOwnProperty(movieId)){
            addLikedMovie(movieId, blockedMovies[movieId]);
        }else{
            console.log("Movie already exists in liked movies list"); 
        }
        removeBlockedMovie(movieId);
    }
    const blockMovie = (movieId,movies, likedMovies, blockedMovies) => {
        // console.log('movies', movies);
        // console.log('likedMovies', likedMovies);
        // console.log('blockedMovies', blockedMovies);

        console.log('blockMovie', likedMovies[movieId]);
        if(!blockedMovies.hasOwnProperty(movieId)){
            addBlockedMovie(movieId, likedMovies[movieId]);
        }else{
            console.log("Movie already exists in blocked movies list");
        }

        removeLikedMovie(movieId);
    }

    switch (pageType) {
        case 'liked':{
            return(
                <div className='likedMoviesCardHover moviesCardHover'>
                    <FontAwesomeIcon title="block this movie" onClick={()=>blockMovie(movieId, movies, likedMovies, blockedMovies)} icon={faBan} style={{ color: "#ffffff" }}/>
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
    movies: state.movieList.movies,
    blockedMovies: state.movieList.blockedMovies,
    likedMovies: state.movieList.likedMovies,
})

const mapDispatchToProps = (dispatch) => ({
    removeLikedMovie: (movieId) =>dispatch(removeLikedMovie(movieId)),
    removeBlockedMovie: (movieId) =>dispatch(removeBlockedMovie(movieId)),
    addLikedMovie: (movieId, movie) =>dispatch(addLikedMovie(movieId, movie)),
    addBlockedMovie: (movieId, movie) =>dispatch(addBlockedMovie(movieId, movie))
})

MoviesCardHover.propTypes = {
    pageType: PropTypes.string.isRequired,
    movieId: PropTypes.string.isRequired,
    movies: PropTypes.object.isRequired,
    likedMovies: PropTypes.object.isRequired,
    blockedMovies: PropTypes.object.isRequired,
    removeBlockedMovie: PropTypes.func.isRequired,
    removeLikedMovie: PropTypes.func.isRequired,
    addLikedMovie: PropTypes.func.isRequired,
    addBlockedMovie: PropTypes.func.isRequired
}

export default connect(mapStatesToProps, mapDispatchToProps)(MoviesCardHover);