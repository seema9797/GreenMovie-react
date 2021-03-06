import React, { Component } from 'react';
import {connect} from 'react-redux';
import SearchForm from './SearchForm'
import Spinner from './layout/Spinner';
import MovieContainer from './MoviesContainer';
export class Landing extends Component {
    render() {
       const {loading} =this.props;

        return (
            <div className="container">
                <SearchForm />
                {loading ? <Spinner/> : <MovieContainer/>}
            </div>
        )
    }
}
const mapStateToProps=state=>({
    loading:state.movies.loading
})
export default connect(mapStateToProps)(Landing);
