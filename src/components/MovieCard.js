import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import EditMovie from './EditMovie';
import Rate from './Rate';

const MovieCard = ({handleEdit, handleDelete, el}) => {

    const del = () => {
        handleDelete (el.id)
    }

    return (
        <div className="movie-card">
            <Link to={`/${el.id}`} style={{textDecoration:"none"}}>
                <h2 style={{color:"#061406"}}>{el.title}</h2>
                <span><Rate rate={el.rate}/></span>
                <img src={el.posterUrl} />
            </Link>
            <div className="del-edit-button">
            <button style={{width : "150px", fontWeight: "600"}} className="btn btn-outline-danger" onClick={del}  >DELETE</button>
            <EditMovie handleEdit={handleEdit} el={el}/>
            </div>
        </div>
    )
}

export default MovieCard
