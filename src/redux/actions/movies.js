import types from "./actionTypes";

const setMovies = (movies) => {
    return {
        type: types.moviesPage.SET_MOVIES,
        payload: movies,
    }
};

const setTrailer = (trailerUrl) => {
    return {
        type: types.moviesPage.SET_TRAILER,
        payload: trailerUrl,
    };
};

const actions = {
    setMovies, setTrailer
};

export default actions