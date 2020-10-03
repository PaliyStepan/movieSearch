import {FETCH_MOVIES, SEARCH_MOVIE, FETCH_MOVIE, LOADING, CHANGE_ACTIVE_PAGE, FETCH_MOVIES_WITH_PAGE} from "../actions/types";

const initialStates = {
    movies: [],
    loading: false,
    movie: [],
    text: '',
    currentPage: 1
};

export default function (state = initialStates, action) {
    switch (action.type) {
        case SEARCH_MOVIE:
            return {
                ...state,
                text: action.payload,
                loading: false
            };
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload,
                loading: false,
                currentPage: 1
            };
        case FETCH_MOVIE:
            return {
                ...state,
                movie: action.payload,
                loading: false
            };
        case LOADING:
            return {
                ...state,
                loading: true
            };
        case FETCH_MOVIES_WITH_PAGE:
            return {
                ...state,
                movies: action.payload,
                loading: false,
            };
        case CHANGE_ACTIVE_PAGE:
            return {
                ...state,
                currentPage: action.payload
            };
        default:
                return  state
    }
}
