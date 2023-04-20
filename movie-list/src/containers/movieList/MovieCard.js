
import React, { useState } from 'react';


const MovieCard = (props) => {
    // console.log("MovieCard props", props);
    const [isLiked, setIsLiked] = useState(false);
    const [isBlocked, setIsBlocked] = useState(false);
    const { movie } = props;
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;


    return (
        <div className="card">
            <div className="overlay">
                <div>
                    <h4>{movie.title}</h4>
                    <p>{movie.release_date}</p>
                    <p>{movie.vote_average} / 10 ({movie.vote_count} votes)</p>
                </div>
                <div>
                    <button onClick={()=>{isLiked?props.removeLikedMovie(movie.id):props.addLikedMovie(movie.id,movie); 
                        setIsLiked(!isLiked)}}>{isLiked?"Liked":"Like"}</button>
                    <button onClick={()=>{isBlocked?props.removeBlockedMovie(movie.id):props.addBlockedMovie(movie.id,movie); 
                        setIsBlocked(!isBlocked)}}>{isBlocked?"Blocked":"Block"}</button>
                </div>
            </div>
            <img src={imageUrl} alt={movie.title} />
        </div>
    );
};

export default MovieCard;
