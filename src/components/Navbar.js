import React from "react";
// import {data} from '../data';
import {addMovies, handleMovieSearch, addMovieToList} from '../actions';
import { connect } from 'react-redux';
// import { connect } from "..";

class Navbar extends React.Component {
  constructor(props){
    super();
    this.state = {
      searchText : ''
    };
  }

  handleAddToMovies = (movie) =>{
    // this.props.dispatch(addMovies(movie));
    this.props.dispatch(addMovieToList(movie));
    this.setState({
      showSearchResults : false
    });
  }
  
  handleSearch = ()=>{
    const {searchText} = this.state;
    // console.log('dispatch ',this.props.dispatch);
    // console.log("hello");
    this.props.dispatch(handleMovieSearch(searchText));
  };
  handleChange = (e) => {
    this.setState({
      searchText : e.target.value
    });
  }

    render(){
      // const {showSearchResults} = this.state;
      const {result : movie, showSearchResults} = this.props.search;
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
                      <img src={movie.Poster} alt="search-pic" />

                      <div className="movie-info">
                      <span>{movie.Title}</span>
                      <button onClick={()=>this.handleAddToMovies(movie)} >
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

// class NavbarWrapper extends React.Component {
//   render(){
//     return (
//       <StoreContext.Consumer>
//         {(store)=> <Navbar dispatch={store.dispatch} search={this.props.search} />}
//       </StoreContext.Consumer>
//     )
//   }
// }

function mapStateToProps({search}) {
  return {
    search
  }
}

export default connect(mapStateToProps)(Navbar);

