import {fetchSomeData} from "../api/api";

export const fetchDataThunk = () => {
    return dispatch => {
        dispatch({type:"fetchData"});
        fetchSomeData()
            .then(data => {
                dispatch({type: 'fetchSuccess', payload:data});
            })
            .catch(err => {
                dispatch({type: 'fetchFailed'});
            });
    };
};