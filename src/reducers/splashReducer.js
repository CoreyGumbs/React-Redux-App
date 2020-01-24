import logo from '../imgs/spacex-logo.png';

export const splashState = {
    logo: logo 
};

export const splashReducer =  (state, action) => {
    switch(action.type){
        default:
            return splashState;
    }
};