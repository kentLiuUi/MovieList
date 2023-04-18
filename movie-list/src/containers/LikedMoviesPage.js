import LikedMoviesGrid from '../components/MoviesGrid';
import './style.css';

const LikedMoviesPage = () => {
    return(
        <div className='likedMoviesPage moviesPage'>
            <div className='likedMoviesPageTitle moviesPageTitle'>Liked Movies</div>
            <LikedMoviesGrid pageType="liked"/>
        </div>
    )
}

export default LikedMoviesPage;