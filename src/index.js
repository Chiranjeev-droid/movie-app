import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore}  from "redux";

import App from './components/App';
import './index.css';
import movies from './reducers';

//createStore expects an argument and we will pass reducer(movies) as our argument.
const store=createStore(movies);
//createstore will call our movies reducer which will tell the store its initial or new state and then store will merge the new state provided by reducers.
console.log('store',store)
console.log('STATE',store.getState())


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
