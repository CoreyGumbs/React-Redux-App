
import axios from 'axios';

export const FETCHING_DATA = 'FETCHING_DATA';
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS';
export const FETCHING_ERRORS = 'FETCHING_ERRORS';


export const  fetchData = () =>{
    return dispatch => {
        dispatch({ type: FETCHING_DATA});
        axios.all([
            axios.get('https://api.spacexdata.com/v3/history'),
            axios.get('https://api.spacexdata.com/v3/info'),
            axios.get('https://api.spacexdata.com/v3/dragons'),
            axios.get('https://api.spacexdata.com/v3/rockets')
        ])
        .then(axios.spread((history, info, dragons, rockets ) =>{
            dispatch({ type: FETCHING_DATA_SUCCESS, payload: {
                history: history.data,
                info: info.data,
                dragons: dragons.data,
                rockets: rockets.data
            }});
            console.log(history.info)
        }))
        .catch(err => {
            dispatch({ type: FETCHING_ERRORS, payload: {
                errors: err
            }})
        });
    }
}

export const fetchRocketsData = rocket_id => {
    return dispatch => {
        dispatch({ type: FETCHING_DATA});
        axios.get(`https://api.spacexdata.com/v3/rockets/${rocket_id}`)
        .then(response => {
            dispatch({ type: FETCHING_DATA_SUCCESS, payload: {data: response}});
            console.log(response);
        })
        .catch(err => {
            dispatch({ type: FETCHING_ERRORS, payload: { errors: err}});
        });
    }
}

export const fetchDragonData = id => {
    return dispatch => {
        dispatch({ type: FETCHING_DATA});
        axios.get(`https://api.spacexdata.com/v3/dragons/${id}`)
        .then(response => {
            dispatch({ type: FETCHING_DATA_SUCCESS, payload: {data: response}});
            console.log(response);
        })
        .catch(err => {
            dispatch({ type: FETCHING_ERRORS, payload: {errors: err}});
        })
    }
}