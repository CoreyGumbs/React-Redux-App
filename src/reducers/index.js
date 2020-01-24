import { combineReducers } from 'redux';
import { initialReducer } from './initialReducer';
import { rocketReducer } from './rocketReducer';
import { dragonReducer } from './dragonReducer';

export default  combineReducers({
    initialReducer,
    rocketReducer,
    dragonReducer
});