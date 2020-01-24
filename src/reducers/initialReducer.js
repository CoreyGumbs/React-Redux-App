import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_ERRORS} from '../actions/index';

export const initialState = {
    isLoading: false,
    data: null,
    errors: ''
};



export const initialReducer = ( state = initialState, action ) => {
    switch(action.type){
        case FETCHING_DATA:
            return{
                ...state,
                isLoading: true
            }
        
        case FETCHING_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: {
                    history: [action.payload.history],
                    about: action.payload.info,
                    dragons: [action.payload.dragons],
                    rockets: [action.payload.rockets],
                } 
            }
        
        case FETCHING_ERRORS:
            return{
                ...state,
                errors: action.payload.errors
            }
        default:
            return state;
    }
}