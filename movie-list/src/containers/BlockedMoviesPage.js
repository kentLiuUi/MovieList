import BlockedMoviesGrid from '../components/MoviesGrid';
import './style.css';

const BlockedMoviesPage = () => {
    return(
        <div className='blockedMoviesPage moviesPage'>
            <div className='blockedMoviesPageTitle moviesPageTitle'>Blocked Movies</div>
            <BlockedMoviesGrid pageType="blocked"/>
        </div>
    )
}

export default BlockedMoviesPage;