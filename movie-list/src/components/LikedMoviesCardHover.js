import heart from '../assets/heart.png';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const likeMovie = (movieId,movies, likedMovies, blockedMovies) => {
    console.log('movies', movies);
    console.log('likedMovies', likedMovies);
    console.log('blockedMovies', blockedMovies);

}

const LikedMoviesCardHover =({movieId, movies, likedMovies, blockedMovies}) => {
    return(
        <div className='likedMoviesCardHover'>
            {/* <img src={heart} alt="heart" onClick={likeMovie}/>
            <img src={heart} alt="heart"/> */}
            <FontAwesomeIcon onClick={()=>likeMovie(movieId, movies, likedMovies, blockedMovies)} icon={faHeart} style={{ color: "#ffffff" }}/>
            <FontAwesomeIcon icon={faTrashCan} style={{ color: "#ffffff" }}/>
        </div>
    )
}

const mapStatesToProps = (state) => ({
    movies: state.movies,
    blockedMovies: state.blockedMovies,
    likedMovies: state.likedMovies
})

export default connect(mapStatesToProps)(LikedMoviesCardHover);