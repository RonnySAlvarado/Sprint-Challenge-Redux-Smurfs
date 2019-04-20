import axios from "axios";
export const GET_SMURF_START = "GET_SMURF_START";
export const GET_SMURF_SUCCESS = "GET_SMURF_SUCCESS";
export const GET_SMURF_FAILURE = "GET_SMURF_FAILURE";
export const ADD_SMURF = "ADD_SMURF";

export const getSmurf = () => dispatch => {
  dispatch({ type: GET_SMURF_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({ type: GET_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: GET_SMURF_FAILURE, payload: err });
    });
};

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
