import {
  PROGRAM_GET_REQUEST,
  PROGRAM_GET_SUCCESS,
  PROGRAM_GET_FAIL,
  PROGRAM_GET_SEARCH,
} from '../constants/programConstants';

export const program = (state = { program: [] }, action) => {
  switch (action.type) {
    case PROGRAM_GET_REQUEST:
      return { loading: true, program: [] };
    case PROGRAM_GET_SUCCESS:
      return { loading: false, program: action.payload };
    case PROGRAM_GET_FAIL:
      return { loading: false, error: action.payload };
    case PROGRAM_GET_SEARCH:
      return {
        ...state,
        program: action.payload,
      };
    default:
      return state;
  }
};
