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