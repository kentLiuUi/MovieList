import BlockedMoviesCard from './BlockedMoviesCard';
import './style.css';
import {connect} from 'react-redux';

const BlockedMoviesGrid = ({blockedMovies}) => {
    console.log('blockedMoviesGrid-blockedMovies', blockedMovies);

    return(
        <div className='blockedMoviesGrid'>   
            {Object.keys(blockedMovies).map((curId)=>{
                return(
                    <BlockedMoviesCard movieId={curId}/>
                )
            })}
            {/* <BlockedMoviesCard movieId="76600"/>
            <BlockedMoviesCard movieId="594767"/> */}
  
        </div>
    )
}

const mapStatesToProps = (state) => ({
    blockedMovies: state.blockedMovies
})
export default connect(mapStatesToProps)(BlockedMoviesGrid);