import {POSTER_BASE_URL} from '../constants';
import { connect } from 'react-redux';
import MoviesCardHover from './MoviesCardHover';

const MoviesCard = ({pageType, movieId, blockedMovies, likedMovies}) => {
    // console.log(movieId)
    // console.log('card', likedMovies);
    switch (pageType) {
        case 'liked':{
            let curMovie = likedMovies[movieId];
            if(Object.keys(likedMovies).length){
                return(
                    <div className='likedMoviesCard moviesCard'>
                        <img src={`${POSTER_BASE_URL}${curMovie.poster_path}`} alt="movie poster"/>
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
                        <img src={`${POSTER_BASE_URL}${curMovie.poster_path}`} alt="movie poster"/>
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
    blockedMovies: state.moviesPageReducer.blockedMovies,
    likedMovies: state.moviesPageReducer.likedMovies
})

export default connect(mapStateToProps)(MoviesCard);