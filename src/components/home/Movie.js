

import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {fetchMovie, setLoading} from "../../redux/actions/searchActions";
import Loader from "../Loader";
import {Link} from "react-router-dom";
import imgPlaceholder from "../../assets/img/imgPlaceholder.png";

const Movie = (props) =>{
    const dispatch = useDispatch();
    const loading = useSelector(({movies}) =>  movies.loading);
    const movie = useSelector(({movies}) =>  movies.movie);

    useEffect(()=>{
        dispatch(fetchMovie(props.match.params.id));
        dispatch(setLoading());
    },[props.match.params.id, dispatch]);

        return (
            <div className="row">
                <div className="col-12 mb-5">
                    <Link to="/">Go Back </Link>
                </div>
                {
                    loading ? <Loader/> : (
                        <div className="col-12 movie">
                            <div className="row">

                                <div className="col-12 col-md-4 text-center mb-5 mb-md-0">
                                    <img src={movie.Poster !== "N/A" ? movie.Poster : imgPlaceholder} alt="" className="img-fluid"/>
                                </div>
                                <div className="col-12 col-md-8">
                                    <div className="row">
                                        <div className="col-12">
                                            <h1 className="mt-0 text-left">{movie.Title} <span>({movie.Year})</span></h1>
                                        </div>
                                        <div className="col-6 mb-3">
                                            <div className="movie-row">
                                                <h4>
                                                    Director:
                                                </h4>
                                                <p>
                                                    {movie.Director}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-6 mb-3">
                                            <div className="movie-row">
                                                <h4>
                                                    Released:
                                                </h4>
                                                <p>
                                                    {movie.Released}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-12 mb-3">
                                            <div className="movie-row">
                                                <h4>
                                                    Plot:
                                                </h4>
                                                <p>
                                                    {movie.Plot}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-12 mb-3">
                                            <div className="movie-row">
                                                <h4>
                                                    Actors:
                                                </h4>
                                                <p>
                                                    {movie.Actors}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-3 mb-3">
                                            <div className="movie-row">
                                                <h4>Rating</h4>
                                                <div className="rating__amount">{movie.imdbRating}</div>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-3 mb-3">
                                            <div className="movie-row">
                                                <h4>Votes</h4>
                                                <div className="rating__amount">{movie.imdbVotes}</div>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-3 mb-3">
                                            <div className="movie-row">
                                                <h4>Runtime</h4>
                                                <div className="rating__amount">{movie.Runtime}</div>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-5">
                                            <a
                                                href={'https://www.imdb.com/title/'+movie.imdbID}
                                                rel="noopener noreferrer"
                                                target="_blank"
                                            >Look at imdb</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
};

export default Movie;











