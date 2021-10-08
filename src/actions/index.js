import axios from 'axios';

export const FETCH_SMURF = 'FETCH_SMURF';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const ADD_SMURF = 'ADD_SMURF';
export const ERROR_VALUE = 'ERROR_VALUE';

export const fetchSmurfs = () => {
    return(dispatch => {
        dispatch({type:FETCH_SMURF});
        axios.get(`http://localhost:3333/smurfs`)
            .then(res => {
                dispatch(fetchSuccess(res.data))
            })
            .catch(er=>{
                console.log(er)
                dispatch(fetchfail(er))
            })
    })
}

export const fetchSuccess = (resData) => {
    return{
        type: FETCH_SUCCESS,
        payload: resData
    }
}

export const fetchfail = (error) => {
    return{
        type: FETCH_FAIL,
        payload: error
    }
}

export const addSmurf = (newSmurf) => {
    return{
        type: ADD_SMURF,
        payload: newSmurf
    }
}

export const errorValue = (errorMsg) => {
    return{
        type:ERROR_VALUE,
        payload:errorMsg
    }
}



//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.