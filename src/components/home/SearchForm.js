import React from "react";

import {connect} from 'react-redux';
import {searchMovie, fetchMovies, setLoading} from "../../redux/actions/searchActions";

class SearchForm extends React.Component {

    onChange = e => {
        this.props.searchMovie(e.target.value);
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.fetchMovies(this.props.text);
        this.props.setLoading();
    };


    render() {
        return (
            <div className="search mb-5">
                <form action="" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-12 col-md-9 mb-3 mb-md-0">
                                <input
                                    type="text"
                                    placeholder="search film"
                                    className="form-control"
                                    onChange={this.onChange}
                                    value={this.props.text}
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
    }
}

const mapStateToProps = state =>({
    text: state.movies.text
});


export default  connect(mapStateToProps, {searchMovie, fetchMovies, setLoading})(SearchForm);
