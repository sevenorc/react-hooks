import React from 'react'
import { Link } from 'react-router-dom';

const Trailer = ({movie,match}) => {
    console.log(match)
    const item = movie.find(el=>el.id == match.params.id);
    return (
        <div className="trailer-box">
            <h1 style={{marginBottom:"30px"}}>{item.title}</h1>
            {item.trailer}
            <p style={{marginTop:"20px"}}>{item.description}</p>
            <Link to="/">
                <button style={{marginTop:"20px"}} className="btn btn-info">Home</button>
            </Link>
        </div>
    )
}

export default Trailer
