export const initialState = {
    isLoading: false,
    data: {
        history: [],
        about: [],
        rockets: [],
        dragons: []
    },
    errors: ''
};


export const initialReducer = ( state = initialState, action ) => {
    switch(action.type){
        default:
            return state;
    }
}