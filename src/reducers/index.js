import { ADD_MOVIES, ADD_FAVOURITE ,REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES} from "../actions";

const initialMovieState = {
  list: [],
  favourites: [],
  showFavourites: false
};
export default function movies(state = initialMovieState, action) {
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
