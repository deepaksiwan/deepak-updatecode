import {
  MENTOR_LIST_REQUEST,
  MENTOR_LIST_SUCCESS,
  MENTOR_LIST_FAIL,
  MENTOR_LIST_SEARCH,
  MENTOR_LIST_DETAILS_REQUEST,
  MENTOR_LIST_DETAILS_SUCCESS,
  MENTOR_LIST_DETAILS_FAIL,
} from '../constants/mentorConstants';

export const mentor = (state = { mentor: [] }, action) => {
  switch (action.type) {
    case MENTOR_LIST_REQUEST:
      return { ...state, loading: true, mentor: [] };
    case MENTOR_LIST_SUCCESS:
      return { loading: false, mentor: action.payload };
    case MENTOR_LIST_FAIL:
      return { loading: false, error: action.payload };
    case MENTOR_LIST_SEARCH:
      return {
        ...state,
        mentor: action.payload,
      };

    default:
      return state;
  }
};

export const mentorDetails = (state = { mentorDetail: {} }, action) => {
  switch (action.type) {
    case MENTOR_LIST_DETAILS_REQUEST:
      return { loading: true, ...state };
    case MENTOR_LIST_DETAILS_SUCCESS:
      return { loading: false, mentorDetail: action.payload };
    case MENTOR_LIST_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
