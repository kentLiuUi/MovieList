import {POSTER_BASE_URL} from '../constants';
import { connect } from 'react-redux';
import LikedMoviesCardHover from './LikedMoviesCardHover';

const BlockedMoviesCard = ({movieId, likedMovies}) => {
    console.log(movieId)
    console.log(Object.keys(likedMovies).length)
    let curMovie = likedMovies[movieId];
    if(Object.keys(likedMovies).length){
        return(
            <div className='blockedMoviesCard'>
                <img src={`${POSTER_BASE_URL}${curMovie.poster_path}`} alt="movie poster"/>
                <LikedMoviesCardHover/>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    likedMovies: state.likedMovies
})

export default connect(mapStateToProps)(BlockedMoviesCard);