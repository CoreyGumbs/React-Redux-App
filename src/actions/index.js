
import axios from 'axios';

export const  fetchData = () =>{
    return dispatch => {
        dispatch({ type: 'FETCHING_DATA'});
        axios.all([
            axios.get('https://api.spacexdata.com/v3/history'),
            axios.get('https://api.spacexdata.com/v3/info'),
            axios.get('https://api.spacexdata.com/v3/dragons'),
            axios.get('https://api.spacexdata.com/v3/rockets')
        ])
        .then(axios.spread((history, info, dragons, rockets ) =>{
            dispatch({ type: 'RETRIEVED_DATA', payload: {
                history: history.data,
                info: info.data,
                dragons: dragons.data,
                rockets: rockets.data
            }});
        }))
        .catch(err => console.log(err));
    }
}