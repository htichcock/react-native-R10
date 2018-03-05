import { SPEAKERS_ENDPOINT } from "../../config/endpoints";

// ACTIONS

const SPEAKERS_GET_LOADING = "SPEAKERS_GET_LOADING";
const SPEAKERS_GET = "SPEAKERS_GET";
const SPEAKERS_GET_ERROR = "SPEAKERS_GET_ERROR";

// ACTION CREATORS

const getSpeakersLoading = () => ({ type: SPEAKERS_GET_LOADING });
const getSpeakers = speakersData => ({
  type: SPEAKERS_GET,
  payload: speakersData
});
const getSpeakersError = error => ({
  type: SPEAKERS_GET_ERROR,
  payload: error
});

export const fetchSpeakersData = id => dispatch => {
  dispatch(getSpeakersLoading());
  fetch(`${SPEAKERS_ENDPOINT}?orderBy="speaker_id"&equalTo="${id}"`)
    .then(r => r.json())
    .then(data => {
      dispatch(getSpeakers(Object.values(data)[0]));
    })
    .catch(error => dispatch(getSpeakersError(error)));
};

// REDUCER

const speakersReducer = (
  state = {
    speakersData: {},
    isLoading: false,
    error: null
  },
  action
) => {
  switch (action.type) {
    case SPEAKERS_GET_LOADING: {
      return { ...state, isLoading: true, error: null };
    }
    case SPEAKERS_GET: {
      return {
        ...state,
        speakersData: {
          ...state.speakersData,
          [action.payload.speaker_id]: action.payload
        },
        isLoading: false,
        error: null
      };
    }
    case SPEAKERS_GET_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default speakersReducer;
