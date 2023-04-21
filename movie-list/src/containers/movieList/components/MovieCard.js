import {useNavigate} from 'react-router-dom';
import React, { useState } from 'react';


const MovieCard = (props) => {
    // console.log("MovieCard props", props);
    const [isLiked, setIsLiked] = useState(false);
    const [isBlocked, setIsBlocked] = useState(false);
    const { movie } = props;
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const navigate = useNavigate();

    return (
        <div className="card" style={{display:(movie.id in props.blockedMovies)?'none':''}} >
            <div className="MovieList_MovieCard_overlay">
                <div>
                    <p>{movie.overview}</p>
                    <p>{movie.release_date}</p>
                    <p>{movie.vote_average} / 10 ({movie.vote_count} votes)</p>
                </div>
                <div>
                    <button onClick={() => {
                        (movie.id in props.likedMovies) ? props.removeLikedMovie(movie.id) : props.addLikedMovie(movie.id, movie)
                    }}>{(movie.id in props.likedMovies) ? "Liked" : "Like"}
                    </button>
                    <button onClick={() => {
                        (movie.id in props.blockedMovies) ? props.removeBlockedMovie(movie.id) : props.addBlockedMovie(movie.id, movie)
                    }}>Block</button>
                </div>
            </div>
            <img src={imageUrl} alt={movie.title} onClick={()=>navigate(`/detail/${movie.id}`)} />
            <p onClick={()=>navigate(`/detail/${movie.id}`)}>{movie.title}</p>
        </div>
    );
};

export default MovieCard;
