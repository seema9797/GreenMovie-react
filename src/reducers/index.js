import {combineReducers} from 'redux';
import searchReducer from './serahcReducer';

export default combineReducers({

    movies: searchReducer
});