import {
  SUBSCRIBE_STUDENT_REQUEST,
  SUBSCRIBE_STUDENT_SUCCESS,
  SUBSCRIBE_STUDENT_FAIL,
  SUBSCRIBE_PROFESSIONAL_REQUEST,
  SUBSCRIBE_PROFESSIONAL_SUCCESS,
  SUBSCRIBE_PROFESSIONAL_FAIL,
  SUBSCRIBE_ENTREPRENEUR_REQUEST,
  SUBSCRIBE_ENTREPRENEUR_SUCCESS,
  SUBSCRIBE_ENTREPRENEUR_FAIL,
} from '../constants/subscriptionConstants';

export const subscribeStudent = (state = {}, action) => {
  switch (action.type) {
    case SUBSCRIBE_STUDENT_REQUEST:
      return { loading: true };
    case SUBSCRIBE_STUDENT_SUCCESS:
      return { loading: false, Studentsubscribe: action.payload };
    case SUBSCRIBE_STUDENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const subscribeProfessional = (state = {}, action) => {
  switch (action.type) {
    case SUBSCRIBE_PROFESSIONAL_REQUEST:
      return { loading: true };
    case SUBSCRIBE_PROFESSIONAL_SUCCESS:
      return { loading: false, Professionalsubscribe: action.payload };
    case SUBSCRIBE_PROFESSIONAL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const subscribeEntrepreneur = (state = {}, action) => {
  switch (action.type) {
    case SUBSCRIBE_ENTREPRENEUR_REQUEST:
      return { loading: true };
    case SUBSCRIBE_ENTREPRENEUR_SUCCESS:
      return { loading: false, Entrepreneursubscribe: action.payload };
    case SUBSCRIBE_ENTREPRENEUR_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
