import {combineReducers} from "redux";
import newsPage from './reducers/news';
import moviesPage from './reducers/movies'

const redux = require('redux');

const rootReducer = combineReducers({
    newsPage,
    moviesPage
});

const store = redux.createStore(rootReducer);

export default store;