import MoviesCard from './MoviesCard';
import './style.css';
import {connect} from 'react-redux';

const MoviesGrid = ({pageType, blockedMovies, likedMovies}) => {
    // console.log('blockedMoviesGrid-blockedMovies', blockedMovies);
    // console.log('moviesGrid-pageType',pageType)
    switch (pageType) {
        case 'liked':{
            return(
                <div className='likedMoviesGrid moviesGrid'>   
                    {Object.keys(likedMovies).map((curId)=>{
                        return(
                            <MoviesCard movieId={curId} pageType={pageType}/>
                        )
                    })}
                    {/* <BlockedMoviesCard movieId="76600"/>
                    <BlockedMoviesCard movieId="594767"/> */}
          
                </div>
            )
        }    
        case 'blocked':{
            return(
                <div className='blockedMoviesGrid moviesGrid'>   
                    {Object.keys(blockedMovies).map((curId)=>{
                        return(
                            <MoviesCard movieId={curId}  pageType={pageType}/>
                        )
                    })}
                    {/* <BlockedMoviesCard movieId="76600"/>
                    <BlockedMoviesCard movieId="594767"/> */}
          
                </div>
            )
        } 
        default:
            return; 
    }

}

const mapStatesToProps = (state) => ({
    blockedMovies: state.blockedMovies,
    likedMovies: state.likedMovies
})
export default connect(mapStatesToProps)(MoviesGrid);