import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Normalize from 'react-normalize';

import { reducer } from './reducers/reducers';

import App from './App';
import './css/index.css';

const store =  createStore(reducer);

ReactDOM.render(
<Provider store={store}>
    <Normalize />
    <App />
</Provider>
, document.getElementById('root'));


