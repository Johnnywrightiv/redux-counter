import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import hooks and summation of Reducers
import { createStore } from 'redux';
import allReducers from './redux/reducers/index_reducers';
import { Provider } from 'react-redux';

// Define a store prop to pass state to the Provider
const store = createStore(
  allReducers,
  { counter: 4, auth: true }, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Wrap the app in the <Provider> tag to 'provide' it access to store > state*/}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);