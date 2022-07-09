// {
//     type: 'ADD_MOVIES',
//     movies: [m1,m2,m3]
// }
// {
//     type: 'DECREASE_COUNT'
// }

//action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FROM_FAVOURITES='REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITES = 'REmove_FROM_FAVOURITES';
//these type of functions are called action creators because they are ultimately returning or creating an action
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies: movies, //movies
  };
}
export function addFavourite(movie) {
    return {
      type: ADD_FAVOURITE,
      movie: movie, //movies
    };
  } 
  export function removeFromFavourites(movie) {
    return {
      type: REMOVE_FROM_FAVOURITES,
      movie: movie, //movies
    };
  } 

  export function setShowFavourites(val){
    return{
      type: SET_SHOW_FAVOURITES,
      val //passing value to reducer
    }
  }
  export function handleMovieSearch(movie) {
     //our action creators are generally synchronous and they return a particular object and my fetch request is an asynchronous call
    //actions must be palin objects
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=205c172a&t=${movie}`;
    return function (dispatch) {
      fetch(url)
        .then((response) => response.json())
        .then((movie) => {
          console.log("movie", movie);
          //dispatch an action to store the movie to the store
        });
    };
  }