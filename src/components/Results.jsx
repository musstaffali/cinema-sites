import React, { useEffect, useState } from 'react';
import VideoCard from '../components/VideoCard';
import FlipMove from 'react-flip-move';
import '../css/Results.css';
import axios from '../axios';



function Results({ chosenOption }) {
    
    const [movies, setMovies] = useState([]);
    
    // this hooks makes this code to run everytime results loads or mounts
        useEffect(() => {
            async function fetchData() {
                const request = await axios.get(chosenOption); 
                // console.log(request)
                setMovies(request.data.results);
                return request;
            }

            fetchData();
        }, [chosenOption]);
    
    
    return (
        <div className="results">
            <FlipMove>
            {movies.map((movie) => (
                <VideoCard key={movie.id} movie={movie}/>
            ))}
            </FlipMove>
           
        </div>
    );
}

export default Results
