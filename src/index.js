import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';

// always keeps package imports above file imports
import './index.css';
import App from './components/App';
import movies from './reducers';

// This is the way we define store 
// store takes reducer as the argument
const store  = createStore(movies);
console.log('store', store);
console.log('store', store.getState());
// This dispatch fn helps in sending actions to store
store.dispatch({
  type : 'ADD_MOVIES',
  movies : [{name : 'Superman'}]
});

console.log('BEFORE STATE', store.getState());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
