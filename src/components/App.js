import React from "react";
import { data } from '../data';
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies } from "../actions";

class App extends React.Component {
  componentDidMount() {
    const {store} = this.props;
    // This subscribe call back is called after dispatch fn
    // since our app already had movie data in store so we not doing anything so we have used this fn.
    store.subscribe(()=>{
      // this fn helps in forcefully updating our app component
      this.forceUpdate();
    })
    // This dispatch fn helps in sending actions to store
    store.dispatch(addMovies(data));

    console.log('state', this.props.store.getState());
  }

  isMovieFavourite = (movie) =>{
    const {favourites} = this.props.store.getState();

    const index = favourites.indexOf(movie);

    if(index != -1){ return true; }
    return false;
  }
  render() {
    // We want to get movies from store rather than our data file
    // const movies = this.props.store.getState();

    const { list } = this.props.store.getState();
    console.log("Render : ", this.props.store.getState());
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div className="list">
            {
              list.map((movie, index) => (
                <MovieCard 
                movie={movie} 
                key={`movies-${index}`} 
                dispatch={this.props.store.dispatch} 
                isFavourite = {this.isMovieFavourite(movie)}
                />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
