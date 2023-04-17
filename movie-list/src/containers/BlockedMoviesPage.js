import BlockedMoviesGrid from '../components/BlockedMoviesGrid';
import './style.css';

export default () => {
    return(
        <div className='blockedMoviesPage'>
            <div className='blockedMoviesPageTitle'>Blocked Movies</div>
            <BlockedMoviesGrid/>
        </div>
    )
}