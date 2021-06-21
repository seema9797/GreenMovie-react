import axios from 'axios';
import {SEARCH_MOVIE,FETCH_MOVIES,FETCH_MOVIE,LOADING} from './types';
import {APIKey} from '../APIKey';

export const searchMovies=text=>dispatch=>{
    dispatch({
        type : SEARCH_MOVIE,
        payload:text
    });
};
export const fetchMovies =text=>dispatch=>{
    axios
    .get(`http://www.omdbapi.com/?s=${text}&apikey=${APIKey}`)
    .then(response=>
        dispatch({
            type:FETCH_MOVIES,
            payload:response.data
        })
    )
    .catch(err=>console.log(err));

}
export const fetchMovie =id=>dispatch=>{
    axios
    .get(`http://www.omdbapi.com/?i=${id}&apikey=${APIKey}`)
    .then(response=>
        dispatch({
            type:FETCH_MOVIE,
            payload:response.data
        })
        
        )
        .catch(err =>console.log(err));
}

export const setLoading=()=>{
    return{
        type:LOADING
    }
}