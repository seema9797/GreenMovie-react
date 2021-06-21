import React, { Component } from 'react'
import { connect } from 'react-redux'
import {searchMovies,fetchMovies,setLoading} from '../../actions/searchAction'
 class SearchForm extends Component {
 

     onChange=e=>{
        this.props.searchMovies(e.target.value)
    }

    onSubmit=e=>{
        e.preventDefault(); 
        this.props.fetchMovies(this.props.text)
        this.props.setLoading();
    }
    render() {
        return (
            <div className="jumbotron jumbotron-fuild mt-5 text-center">
                <div className="conatiner">
                     <h1 className="display-4 md-3">
                         <i className="fa fa-search"/>Search for movie,TV series... 
                     </h1>
                     <form id="searchForm" onSubmit={this.onSubmit}>
                       <input
                        type="text"
                        className="form-control"
                        name="searchText"
                        placeholder="search movies, TV Series"
                        onChange={this.onChange}
                        />
                        <button type="submit" className="btn btn-info btn-bg mt-3">Search</button>
                     </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps=state=>({
    text:state.movies.text
})


export default connect(mapStateToProps,{searchMovies,fetchMovies,setLoading})(SearchForm);