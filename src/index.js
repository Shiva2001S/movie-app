import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
// Since i am exporting combineReducers in reduers/index.js without creating a variable so i have to import it as like this only 
import combineReducers  from './reducers/index';
import thunk from 'redux-thunk';

// always keeps package imports above file imports
import './index.css';
import App from './components/App';
// Here movies is the name of the fn exported by index.js in reducers
// import movies from './reducers';
// import combineReducers from './reducers';

// Here logger is the name of the middleware
// Original form of logger fn : function logger(obj,  next, action) 
// Here if we have middleware2 then instead of dispatch we called middleware2
// Here in looger fn we have used curried form of fn
// To  pass the middleware to store we have used applyMiddleware method below
// const logger = function ({dispatch, getState}) {
//   return function (next) {
//     return function(action){
//       console.log('ACTION_TYPE = ', action.type);
//       // next helps in calling next middleware
//       // Here if we have another middleware we will pass that in next but in last middleware have to pass action
//       next(action);
//     }
//   }
// }

// This is another way by which we write logger fn
const logger = ({dispatch, getState}) => (next) => (action) =>{
  // console.log('ACTION_TYPE = ', action.type);
  next(action);
}

// const thunk = ({dispatch, getState}) => (next) => (action) =>{
//   if(typeof action === 'function'){
//     action(dispatch);
//     return;
//   }
//   next(action);
// }

// This is the way we define store 
// store is the container which stores our states so if any component wants the state it is got by store 
// But the state stored by store is read only we can only change it by reducers
// store takes reducer as the argument and calls it and takes the default state(of reducer) if no state is passed to reducer
const store  = createStore(combineReducers  , applyMiddleware(logger, thunk));
console.log('store', store);
// console.log('store', store.getState());
// // This dispatch fn helps in sending actions to store
// store.dispatch({
//   type : 'ADD_MOVIES',
//   movies : [{name : 'Superman'}]
// });

// console.log('BEFORE STATE', store.getState());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store = {store} />
  </React.StrictMode>
);
