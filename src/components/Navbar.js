import React from "react";
import {data} from '../data';
import {addMovies, handleMovieSearch} from '../actions';

class Navbar extends React.Component {
  constructor(props){
    super();
    this.state = {
      showSearchResults : true,
      searchText : ''
    };
  }

  handleAddToMovies = (movie) =>{
    this.props.dispatch(addMovies(movie));
    this.setState({
      showSearchResults : false
    });
  }

  handleSearch = ()=>{
    const {searchText} = this.state;
    console.log("hello");
    this.props.dispatch(handleMovieSearch(searchText));
  };
  handleChange = (e) => {
    this.setState({
      searchText : e.target.value
    });
  }

    render(){
      const {showSearchResults} = this;
        return (
          <div className="nav">
            <div className="search-container">
                <input onChange={this.handleChange} />
                {/* <button id="search-btn" onClick={()=>this.handleSearch}>Search</button> */}
                <button id="search-btn" onClick={this.handleSearch}>Search</button>
                {
                  showSearchResults &&
                  <div className="search-results">
                    <div className="search-result">
                      <img src={data[0].Poster} alt="search-pic" />

                      <div className="movie-info">
                      <span>{data[0].Title}</span>
                      <button onClick={()=>this.handleAddToMovies(data[0])} >
                        Add to Movies
                      </button>
                      </div>
                    </div>
                  </div>
                }
            </div>
          </div>
        );
    }
}

export default Navbar;

