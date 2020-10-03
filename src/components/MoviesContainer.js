import React from "react";
import {useSelector} from "react-redux";
import MovieCard from "./MovieCard";

const MoviesContainer = () =>{
        const movies = useSelector(({movies}) =>  movies.movies);
        return(
            <div className="row">
                {
                    movies.Response && movies.Response === "True"
                    ? movies.Search.map((movie, index)=> <MovieCard key={index} movie={movie}/>)
                    : null
                }

                {
                    movies.Response && movies.Response === "False"
                    ?  <div className="col-12">
                            <h2>
                                OOPS! <br/>
                                something going wrong
                            </h2>
                        </div>
                    : null
                }
            </div>
        )
};

export default MoviesContainer;
