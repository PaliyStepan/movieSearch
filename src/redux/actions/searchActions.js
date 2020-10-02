import {FETCH_MOVIES, SEARCH_MOVIE, FETCH_MOVIE, LOADING} from "./types";
import axios from 'axios';

export const  searchMovie = text => dispatch =>{
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    })
};

export const fetchMovies = text => dispatch => {
    axios.get(`http://www.omdbapi.com/?apikey=bc28f3a0&s=${text}`)
        .then(response => dispatch({
            type: FETCH_MOVIES,
            payload: response.data
        }))
        .catch(err=>console.log(err))
};

export const fetchMovie = id => dispatch => {
    axios.get(`http://www.omdbapi.com/?apikey=bc28f3a0&i=${id}`)
        .then(response => dispatch({
            type: FETCH_MOVIE,
            payload: response.data
        }))
        .catch(err=>console.log(err))
};



export const setLoading = () =>{
    return{
        type: LOADING
    }
};
