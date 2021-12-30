import {
  PACKAGES_GET_REQUEST,
  PACKAGES_GET_SUCCESS,
  PACKAGES_GET_FAIL,
  PACKAGES_GET_SEARCH,
} from '../constants/packagesConstants';

export const packages = (state = { packages: [] }, action) => {
  switch (action.type) {
    case PACKAGES_GET_REQUEST:
      return { loading: true, packages: [] };
    case PACKAGES_GET_SUCCESS:
      return { loading: false, packages: action.payload };
    case PACKAGES_GET_FAIL:
      return { loading: false, error: action.payload };
    case PACKAGES_GET_SEARCH:
      return {
        ...state,
        packages: action.payload,
      };
    default:
      return state;
  }
};
