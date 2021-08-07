import types from "../actions/actionTypes";

const initialState = {
    movies: [],
    trailer: '',
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case types.moviesPage.SET_MOVIES:
            return {
                ...state,
                movies: [...state.movies, action.payload]
            };
        case types.moviesPage.SET_TRAILER:
            return {
                ...state,
                trailer: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;