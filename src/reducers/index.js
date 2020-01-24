import { combineReducers } from 'redux';
import { initialReducer } from './initialReducer';
import { rocketReducer } from './rocketReducer';
import { dragonReducer } from './dragonReducer';
import { splashReducer } from './splashReducer';

export default  combineReducers({
    state: initialReducer,
    rocket: rocketReducer,
    dragon: dragonReducer,
    splash: splashReducer
});