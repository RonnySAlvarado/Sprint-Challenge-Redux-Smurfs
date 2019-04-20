import {
  GET_SMURF_START,
  GET_SMURF_SUCCESS,
  GET_SMURF_FAILURE
} from "../actions/index";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURF_START: {
      return {
        ...state,
        fetchingSmurfs: true
      };
    }
    case GET_SMURF_SUCCESS: {
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      };
    }
    case GET_SMURF_FAILURE: {
      return {
        ...state,
        fetchingSmurfs: false,
        error: true
      };
    }
  }
};

export default rootReducer;
