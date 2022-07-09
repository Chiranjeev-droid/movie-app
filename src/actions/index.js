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
  