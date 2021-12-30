import {
  ADVERTISEMENTS_GET_REQUEST,
  ADVERTISEMENTS_GET_SUCCESS,
  ADVERTISEMENTS_GET_FAIL,
} from '../constants/advertisementsConstants';

export const advertisements = (state = { advertisements: [] }, action) => {
  switch (action.type) {
    case ADVERTISEMENTS_GET_REQUEST:
      return { loading: true, advertisements: [] };
    case ADVERTISEMENTS_GET_SUCCESS:
      return { loading: false, advertisements: action.payload };
    case ADVERTISEMENTS_GET_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
