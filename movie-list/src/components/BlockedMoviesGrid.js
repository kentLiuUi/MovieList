import BlockedMoviesCard from './BlockedMoviesCard';
import './style.css';

export default () => {
    return(
        <div className='blockedMoviesGrid'>   
            <BlockedMoviesCard movieId="76600"/>
            <BlockedMoviesCard movieId="594767"/>
        </div>
    )
}  