import React from "react";
import {connect} from "react-redux";
import MovieCard from "./MovieCard";

export class MoviesContainer extends React.Component {
    render() {
        const {movies} = this.props;
        return(
            <div>
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
            </div>
        )
    }
}

const mapStateToProps = state =>({
  movies: state.movies.movies
});
export default connect(mapStateToProps)(MoviesContainer);
