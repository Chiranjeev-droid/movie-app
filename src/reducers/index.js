import { ADD_MOVIES, ADD_FAVOURITE ,REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES} from "../actions";

import { combineReducers } from "redux";
const initialMovieState = {
  list: [],
  favourites: [],
  showFavourites: false
};
export  function movies(state = initialMovieState, action) {
  console.log('MOVIE REDUCER')
  // if(action.type===ADD_MOVIES){
  //     return {
  //         ...state,
  //         list: action.movies

  //     }
  // }
  // return state;

  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies
      };
    case ADD_FAVOURITE:
        return{
            ...state,
        favourites: [action.movie, ...state.favourites]
        }
    case REMOVE_FROM_FAVOURITES:
      const filteredArray=state.favourites.filter(
        movie=>movie.Title!==action.movie.Title
      );
      //filterredArray is absoultely a new array
      return{
        ...state,
        favourites: filteredArray
      }

      case SET_SHOW_FAVOURITES:
        return{
          ...state,
          showFavourites: action.val  //value val coming from action
        }
        


    default:
      return state;
  }
}


const initialSearchState={
  result:{}

}
export function search(state=initialSearchState,action){
  console.log('SEARCH REDUCER')
  return state;
}
//rootReducer will be called every time action is dispatched.
const initialRootState={
  movies: initialMovieState,
  search: initialSearchState

}
// export default function rootReducer(state=initialRootState,action){
//   return {
//     movies: movies(state.movies,action),  //movies data can be managed by moviesReducer
//     search: search(state.search,action)
//   }

// }

export default combineReducers({
  movies:movies, //movies
  search //search:search


});