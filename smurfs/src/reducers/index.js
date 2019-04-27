import {
  GET_SMURF_START,
  GET_SMURF_SUCCESS,
  GET_SMURF_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE
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
    case ADD_SMURF_START: {
      return {
        ...state,
        addingSmurf: true
      };
    }
    case ADD_SMURF_SUCCESS: {
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload
      };
    }
    case ADD_SMURF_FAILURE: {
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      };
    }
    case DELETE_SMURF_START: {
      return {
        ...state,
        deletingSmurf: true
      };
    }
    case DELETE_SMURF_SUCCESS: {
      return {
        ...state,
        deletingSmurf: false,
        smurfs: action.payload
      };
    }
    case DELETE_SMURF_FAILURE: {
      return {
        ...state,
        deletingSmurf: false,
        error: action.payload
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
