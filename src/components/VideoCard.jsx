import React, { forwardRef } from 'react';
import TextTruncate from 'react-text-truncate';
import {ThumbUpSharp} from '@material-ui/icons';
import "../css/VideoCard.css";   

const base_url="https://image.tmdb.org/t/p/original/"

const VideoCard = forwardRef(({ movie }, ref) => {
    return (
        <div ref={ref} className="videocard">
            <img 
            src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
            alt="movie/show poster"/>
            <TextTruncate
            line={2}
            element="p"
            truncateText="..."
            text={movie.overview}
            />
            <h3>{movie.title || movie.original_name}</h3>
            <p className="videocard__info">
                {movie.media_type && `${movie.media_type} •`}
                {movie.release_date || movie.first_air_date} •
                <ThumbUpSharp/>{" "}
                {movie.vote_count}
            </p>

        </div>
    );
});

export default VideoCard
