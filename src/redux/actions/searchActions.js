import {FETCH_MOVIES, SEARCH_MOVIE, FETCH_MOVIE, LOADING, CHANGE_ACTIVE_PAGE, FETCH_MOVIES_WITH_PAGE} from "./types";
import axios from 'axios';


const url = 'http://www.omdbapi.com/?apikey=bc28f3a0&';

export const  searchMovie = text => dispatch =>{
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    })
};


export const  changeCurrentPage = number => dispatch =>{
    dispatch({
        type: CHANGE_ACTIVE_PAGE,
        payload: number
    })
};

// export const fetchMovies = text => dispatch => {
//     axios.get(`http://www.omdbapi.com/?apikey=bc28f3a0&s=${text}`)
//         .then(response => dispatch({
//             type: FETCH_MOVIES,
//             payload: response.data
//         }))
//         .catch(err=>console.log(err))
// };

export const fetchMovies = text => dispatch => {
    axios.get(`${url}s=${text}`)
        .then(response => dispatch({
            type: FETCH_MOVIES,
            payload: response.data
        }))
        .catch(err=>console.log(err))
};



export const fetchMoviesWithPage = (text,page) => dispatch => {
    dispatch(changeCurrentPage(page));
    dispatch(setLoading());
    axios.get(`${url}s=${text}&page=${page}`)
        .then(response => dispatch({
            type: FETCH_MOVIES_WITH_PAGE,
            payload: response.data
        }))
        .catch(err=>console.log(err))
};


export const fetchMovie = id => dispatch => {
    axios.get(`${url}i=${id}`)
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
