import React, {useState} from 'react'
import '../App.css';
import Rate from './Rate';

const MovieCard = ({el}) => {
    return (
        <div className="movie-card">
            <h2>{el.title}</h2>
            <span><Rate rate={el.rate}/></span>
            <img src={el.posterUrl} />
            <h3>Description :</h3>
            <p>{el.description}</p>
        </div>
    )
}

export default MovieCard
