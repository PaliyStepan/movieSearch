import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Pagination from "react-js-pagination";
import MovieCard from "./MovieCard";
import {changeCurrentPage, fetchMoviesWithPage} from '../redux/actions/searchActions';
const MoviesContainer = () =>{
        const movies = useSelector(({movies}) =>  movies.movies);
        const totalItems = useSelector(({movies}) =>  parseInt(movies.movies.totalResults));
        const currentPage = useSelector(({movies}) =>  movies.currentPage);
        const text = useSelector(({movies}) =>  movies.text);
        const dispatch = useDispatch();



        const handlePageChange = (pageNumber) => {
            // dispatch(changeCurrentPage(pageNumber));
            dispatch(fetchMoviesWithPage(text,pageNumber));
        };

        return(
            <div className="row">

                {
                    movies.Response && movies.Response === "True"
                    ? movies.Search.map((movie, index)=> <MovieCard key={index} movie={movie}/>)
                    : null
                }

                {
                    movies.Response && movies.Response === "True"
                        ?
                        <div className="col-12 mt-5">
                            <Pagination
                                activePage={currentPage}
                                itemsCountPerPage={10}
                                totalItemsCount={totalItems}
                                pageRangeDisplayed={6}
                                onChange={handlePageChange}
                                itemClass="page-item"
                                linkClass="page-link"
                                firstPageText="В начало"
                                lastPageText="В конец"
                            />
                        </div>
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
