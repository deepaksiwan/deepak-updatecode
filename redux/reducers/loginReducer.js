import {
  LOGIN_GET_REQUEST,
  LOGIN_GET_SUCCESS,
  LOGIN_GET_FAIL,
  SIGNUP_GET_REQUEST,
  SIGNUP_GET_SUCCESS,
  SIGNUP_GET_FAIL,
  OTP_GET_REQUEST,
  OTP_GET_SUCCESS,
  OTP_GET_FAIL,
} from '../constants/loginConstants';

export const login = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_GET_REQUEST:
      return { loading: true };
    case LOGIN_GET_SUCCESS:
      return { loading: false, login: action.payload };
    case LOGIN_GET_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const signup = (state = {}, action) => {
  switch (action.type) {
    case SIGNUP_GET_REQUEST:
      return { loading: true };
    case SIGNUP_GET_SUCCESS:
      return { loading: false, signup: action.payload };
    case SIGNUP_GET_FAIL:
      return { loading: false, err: action.payload };
    default:
      return state;
  }
};

export const otpverify = (state = {}, action) => {
  switch (action.type) {
    case OTP_GET_REQUEST:
      return { loading: true };
    case OTP_GET_SUCCESS:
      return { loading: false, otpverify: action.payload };
    case OTP_GET_FAIL:
      return { loading: false, errr: action.payload };
    default:
      return state;
  }
};
