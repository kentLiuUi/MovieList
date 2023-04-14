import heart from '../assets/heart.png';

const LikedMoviesCardHover =() => {
    return(
        <div className='likedMoviesCardHover'>
            <img src={heart} alt="heart"></img>
        </div>
    )
}

export default LikedMoviesCardHover;