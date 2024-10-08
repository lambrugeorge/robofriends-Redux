import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import './index.css'; 
import { thunk } from 'redux-thunk';
import App from './containers/App';
import 'tachyons';
import { searchRobots, requestRobots } from './reducers';

// Create the logger middleware
const logger = createLogger();


const rootReducer = combineReducers({searchRobots, requestRobots})


// Create the Redux store with the logger middleware
const store = createStore(rootReducer, applyMiddleware(thunk, logger));


// Render the React app
const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
