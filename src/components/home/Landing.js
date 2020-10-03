import React from "react";

import SearchForm from "./SearchForm";
import MoviesContainer from "../MoviesContainer";

import {useSelector} from 'react-redux';
import Loader from "../Loader";

const Landing = () => {
        const loading = useSelector(({movies}) =>  movies.loading);
        return (
            <React.Fragment>
                <h1>Movie Search App</h1>
                <SearchForm />
                {
                    loading ? <Loader/> : <MoviesContainer />
                }
            </React.Fragment>
        );
};

export default  Landing;
