import {POSTER_BASE_URL} from '../constants';
import { connect } from 'react-redux';
import MoviesCardHover from './MoviesCardHover';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesCard = (props) => {
    console.log('MoviesCard props', props);
    const {pageType, movieId, blockedMovies, likedMovies} = props;
    let navigate = useNavigate()
    // console.log(movieId)
    // console.log('card', likedMovies);
    switch (pageType) {
        case 'liked':{
            let curMovie = likedMovies[movieId];
            if(Object.keys(likedMovies).length){
                return(
                    <div className='likedMoviesCard moviesCard'>
                        <img src={`${POSTER_BASE_URL}${curMovie.poster_path}`} alt="movie poster" onClick={()=>navigate(`/detail/${movieId}`)}/>
                        <MoviesCardHover movieId={movieId} pageType={pageType}/>
                    </div>
                )
            }
        }
        case 'blocked':{
            let curMovie = blockedMovies[movieId];
            if(Object.keys(blockedMovies).length){
                return(
                    <div className='blockedMoviesCard moviesCard'>
                        <img src={`${POSTER_BASE_URL}${curMovie.poster_path}`} alt="movie poster" onClick={()=>navigate(`/detail/${movieId}`)}/>
                        <MoviesCardHover movieId={movieId} pageType={pageType}/>
                    </div>
                )
            }
        }
        default:
            return;
    }


}

const mapStateToProps = (state) => ({
    blockedMovies: state.movieList.blockedMovies,
    likedMovies: state.movieList.likedMovies
})

MoviesCard.propTypes = {
    pageType: PropTypes.oneOf(['liked', 'blocked']).isRequired,
    movieId: PropTypes.string.isRequired,
    blockedMovies: PropTypes.object.isRequired,
    likedMovies: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(MoviesCard);