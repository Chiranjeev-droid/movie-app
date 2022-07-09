import React from "react";

import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

import { data } from "../data";
import { addMovies, setShowFavourites } from "../actions";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    //api call
    //dispatch function
    store.subscribe(() => {
      this.forceUpdate();
    });
    store.dispatch(addMovies(data));
  }
  isMovieFav = (movie) => {
    const { movies } = this.props.store.getState();
    return movies.favourites.indexOf(movie) > -1;
  };
  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val));
  };
  render() {
    const { movies } = this.props.store.getState();
    const { list, favourites, showFavourites } = movies;
    console.log("RENDER", this.props.store.getState());
    const displayMovie = showFavourites ? favourites : list;
    return (
      <div className="App">
        <Navbar dispatch={this.props.store.dispatch}/>
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favourites
            </div>
          </div>
          <div className="list">
            {displayMovie.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFav(movie)}
              />
            ))}
          </div>
          {displayMovie.length === 0 ? (
            <div className="no-movies">No movies to display!! </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;