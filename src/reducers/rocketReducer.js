import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_ERRORS} from '../actions/index';

export const rocketState = {
    isLoading: false,
    data: {},
    errors: ''
};

export const rocketReducer = ( state = rocketState, action) => {

    switch(action.type){
        case FETCHING_DATA:
            return {
                ...state,
                isLoading: true
            }
        case FETCHING_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload.data
            }
        
        case FETCHING_ERRORS: 
            return {
                ...state,
                errors: action.payload.errors
            }
        default:
            return state;
    }

};