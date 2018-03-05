import { SESSIONS_ENDPOINT } from "../../config/endpoints";

// ACTIONS

const SESSIONS_GET_LOADING = "SESSIONS_GET_LOADING";
const SESSIONS_GET = "SESSIONS_GET";
const SESSIONS_GET_ERROR = "SESSIONS_GET_ERROR";

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

// REDUCER

const sessionsReducer = (
  state = {
    sessionsData: [],
    isLoading: false,
    error: null
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
    default: {
      return state;
    }
  }
};

export default sessionsReducer;
