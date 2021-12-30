import {
  WEBSITE_CONTENT_GET_REQUEST,
  WEBSITE_CONTENT_GET_SUCCESS,
  WEBSITE_CONTENT_GET_FAIL,
} from '../constants/websiteContentConstants';

export const websiteContent = (state = { loading: false,websiteContent: [] }, action) => {
  switch (action.type) {
    case WEBSITE_CONTENT_GET_REQUEST:
      return { loading: true, websiteContent: [] };
    case WEBSITE_CONTENT_GET_SUCCESS:
      return { loading: false, websiteContent: action.payload };
    case WEBSITE_CONTENT_GET_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
