import React from "react";

import SearchForm from "./SearchForm";
import MoviesContainer from "../MoviesContainer";

import {connect} from 'react-redux';
import Loader from "../Loader";

class Landing extends React.Component {
    render() {
        const {loading} = this.props;
        return (
            <React.Fragment>
                <h1>Movie Search App</h1>
                <SearchForm />
                {
                    loading ? <Loader/> : <MoviesContainer />
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading
});


export default  connect(mapStateToProps)(Landing);
