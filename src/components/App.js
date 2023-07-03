import React from "react";
import { data } from '../data';
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourites } from "../actions";

class App extends React.Component {
  componentDidMount() {
    const {store} = this.props;
    // This subscribe call back is called after dispatch fn
    // since our app already had movie data in store so we not doing anything so we have used this fn.
    // suscribe is a function which helps in listening the changes in state of store 
    store.subscribe(()=>{
      // this fn helps in forcefully updating our app component
      this.forceUpdate();
    })
    // This dispatch fn helps in sending actions to store
    store.dispatch(addMovies(data));

    console.log('state', this.props.store.getState());
  }

  isMovieFavourite = (movie) =>{
    const {movies} = this.props.store.getState();

    const index = movies.favourites.indexOf(movie);

    if(index !== -1){ return true; }
    return false;
  }

  onChangeTab = (val)=>{
    this.props.store.dispatch(setShowFavourites(val))
  }
  render() {
    // We want to get movies from store rather than our data file
    // const movies = this.props.store.getState();

    const { movies } = this.props.store.getState();
    const { list, favourites, showFavourites } = movies;
    console.log("Render : ", this.props.store.getState());


    const displayMovies = showFavourites ? favourites : list;
    console.log("displayMovies : ",typeof displayMovies, " ", displayMovies);
    return (
      <div className="App">
        <Navbar dispatch={this.props.store.dispatch} />
        <div className="main">
          <div className="tabs">
            {/* In the below style if showFavourites is true then we are adding active-tabs class else we are not adding */}
            <div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick={()=>this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites ? 'active-tabs' : ''}`} onClick={()=>this.onChangeTab(true)}>Favourites</div>
          </div>

          <div className="list">
            {
              displayMovies.map((movie, index) => (
                <MovieCard 
                movie={movie} 
                key={`movies-${index}`} 
                dispatch={this.props.store.dispatch} 
                isFavourite = {this.isMovieFavourite(movie)}
                />
              ))
            }
          </div>
          {/* if displayMovies is not empty then we will show the movies else show null ie. nothing */}
          {displayMovies.length === 0? <div className="no-movies">No Movies to display</div>: null}
        </div>
      </div>
    );
  }
}

export default App;
