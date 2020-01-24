import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import Normalize from 'react-normalize';

import combineReducers from './reducers/index';

import App from './App';
import './css/index.css';

const store =  createStore(combineReducers, applyMiddleware(thunk, logger));
console.log(store.getState());

ReactDOM.render(
<Provider store={store}>
    <Router>
        <Normalize />
        <App />
    </Router>
</Provider>
, document.getElementById('root'));


