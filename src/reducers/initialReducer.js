export const initialState = {
    isLoading: false,
    data: null,
    errors: ''
};

// data: {
//     history: [],
//     about: [],
//     dragons: [],
//     rockets: [],
// }

export const initialReducer = ( state = initialState, action ) => {
    switch(action.type){
        case "FETCHING_DATA":
            return{
                ...state,
                isLoading: true
            }
        default:
            return state;
    }
}