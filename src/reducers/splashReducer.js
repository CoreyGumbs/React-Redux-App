import { ACTIVE_SPLASH } from '../actions/toggleSplash';

import logo from '../imgs/spacex-logo.png';

export const splashState = {
    logo: logo,
    logoTxt: 'SpaceX Logo',
    active: true
};

export const splashReducer =  (state = splashState, action) => {
    switch(action.type){
        case ACTIVE_SPLASH: 
            return {
                ...state,
                active: !state.active
            }
        default:
            return state;
    }
};