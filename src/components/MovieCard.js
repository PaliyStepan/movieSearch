import React from 'react';
import {Link} from 'react-router-dom';

import imgPlaceholder from '../assets/img/imgPlaceholder.png'

const MovieCard = (props) =>{
    const {movie} = props;
    return(
        <div className="col-12 col-md-6 mb-5">
            <Link to={'/movie/' + movie.imdbID} className="film-item">
            <img src={movie.Poster !== "N/A" ? movie.Poster : imgPlaceholder} alt=""/>
            <h3>{movie.Title}</h3>
            </Link>
        </div>
    )
};


export default MovieCard;
