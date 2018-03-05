import { CODE_OF_CONDUCT_ENDPOINT } from "../../config/endpoints";

// ACTIONS

const ABOUT_GET_LOADING = "ABOUT_GET_LOADING";
const ABOUT_GET = "ABOUT_GET";
const ABOUT_GET_ERROR = "ABOUT_GET_ERROR";

// ACTION CREATORS

const getAboutLoading = () => ({ type: ABOUT_GET_LOADING });
const getAbout = codeOfConductData => ({
  type: ABOUT_GET,
  payload: codeOfConductData
});
const getAboutError = error => ({ type: ABOUT_GET_ERROR, payload: error });

export const fetchCodeOfConduct = () => dispatch => {
  dispatch(getAboutLoading());
  fetch(CODE_OF_CONDUCT_ENDPOINT)
    .then(r => r.json())
    .then(data => {
      dispatch(getAbout(data));
    })
    .catch(error => dispatch(getAboutError(error)));
};

// REDUCER

const aboutReducer = (
  state = {
    codeOfConductData: [],
    isLoading: false,
    error: null
  },
  action
) => {
  switch (action.type) {
    case ABOUT_GET_LOADING: {
      return { ...state, isLoading: true, error: null };
    }
    case ABOUT_GET: {
      return {
        ...state,
        codeOfConductData: action.payload,
        isLoading: false,
        error: null
      };
    }
    case ABOUT_GET_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default aboutReducer;
