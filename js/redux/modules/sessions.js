import { SESSIONS_ENDPOINT } from "../../config/endpoints";
import { queryFaves, createFave, deleteFave } from "../../config/models";

// ACTIONS

const SESSIONS_GET_LOADING = "SESSIONS_GET_LOADING";
const SESSIONS_GET = "SESSIONS_GET";
const SESSIONS_GET_ERROR = "SESSIONS_GET_ERROR";
const SESSIONS_ADD_FAVE = "SESSIONS_ADD_FAVE";
const SESSIONS_REMOVE_FAVE = "SESSIONS_REMOVE_FAVE";
const SESSIONS_SET_FAVES_BY_REALM = "SESSIONS_SET_FAVES_BY_REALM";

// ACTION CREATORS

const getSessionsLoading = () => ({ type: SESSIONS_GET_LOADING });
const getSessions = sessionsData => ({
  type: SESSIONS_GET,
  payload: sessionsData
});
const getSessionsError = error => ({
  type: SESSIONS_GET_ERROR,
  payload: error
});

export const fetchSessionsData = () => dispatch => {
  dispatch(getSessionsLoading());
  fetch(SESSIONS_ENDPOINT)
    .then(r => r.json())
    .then(data => {
      dispatch(getSessions(data));
    })
    .catch(error => dispatch(getSessionsError(error)));
};

export const addFave = id => {
  createFave(id);
  return {
    type: SESSIONS_ADD_FAVE,
    payload: id
  };
};

export const removeFave = id => {
  deleteFave(id);
  return {
    type: SESSIONS_REMOVE_FAVE,
    payload: id
  };
};

export const setFavesByRealm = () => {
  return {
    type: SESSIONS_SET_FAVES_BY_REALM,
    payload: queryFaves().map(realmFave => realmFave.id)
  };
};

// REDUCER

const sessionsReducer = (
  state = {
    sessionsData: [],
    isLoading: false,
    error: null,
    faves: []
  },
  action
) => {
  switch (action.type) {
    case SESSIONS_GET_LOADING: {
      return { ...state, isLoading: true, error: null };
    }
    case SESSIONS_GET: {
      return {
        ...state,
        sessionsData: action.payload,
        isLoading: false,
        error: null
      };
    }
    case SESSIONS_GET_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    case SESSIONS_ADD_FAVE: {
      return {
        ...state,
        faves: [...state.faves, action.payload]
      };
    }
    case SESSIONS_REMOVE_FAVE: {
      return {
        ...state,
        faves: state.faves.filter(id => id !== action.payload)
      };
    }
    case SESSIONS_SET_FAVES_BY_REALM: {
      return {
        ...state,
        faves: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default sessionsReducer;
