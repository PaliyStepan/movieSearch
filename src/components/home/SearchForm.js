import React from 'react';

import { useDispatch, useSelector} from 'react-redux';
import {searchMovie, fetchMovies, setLoading} from '../../redux/actions/searchActions';

const SearchForm = () => {

    const dispatch = useDispatch();
    const text = useSelector(({movies}) =>  movies.text);

    const handleChange = e =>{
        dispatch(searchMovie(e.target.value))
    };

    const handleFetchMovies = e =>{
        e.preventDefault();
        dispatch(fetchMovies(text));
        dispatch(setLoading());
    };
    return (
        <div className="search mb-5">
            <form action="" onSubmit={handleFetchMovies}>
                <div className="form-group">
                    <div className="row">
                        <div className="col-12 col-md-9 mb-3 mb-md-0">
                            <input
                                type="text"
                                placeholder="search film"
                                className="form-control"
                                onChange={handleChange}
                                value={text}
                            />
                        </div>
                        <div className="col-12 col-md-3">
                            <button className="btn btn-primary w-100">Find</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default  SearchForm;
