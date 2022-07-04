import React from "react";
import {data} from '../data';
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies } from "../actions";
//import { render } from "@testing-library/react";


class  App extends React.Component{
  componentDidMount(){
    //make api call
    //dispatch action
    const {store}=this.props;
    store.subscribe(()=>{
      console.log('UPDATED');  
    //  this.forceUpdate(); //THIS METHOD IS TO FORCEFULLY UPDATE OUR COMPONENT
    })  
    // store.dispatch({
    //   type:'ADD_MOVIES',
    //   movies: data
    // });

    store.dispatch(addMovies(data));
    console.log('state',this.props.store.getState() )
  }
  render(){
    console.log('render');
    const movies = this.props.store.getState();

  return (
    <div className="App">
     <Navbar/>  
     <div className="main">
      <div className="tabs">
        <div className="tab">Movies</div>
        <div className="tab">Favourites</div>
      </div>
      <div className="list">
        {data.map((movie,index)=>(
          <MovieCard movie={movie} key={`movies-${index}`}></MovieCard>
 
        ))}

      </div>
     </div>
    </div>
  );
  }
  
} 

export default App;
