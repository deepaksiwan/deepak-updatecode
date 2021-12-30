import axios from 'axios'
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

export const listStudentSub = () => async (dispatch) => {
  try {
    dispatch({ type: SUBSCRIBE_STUDENT_REQUEST });
    const { data } = await axios.get(
      'https://mentorkart.org/api/sso-subscription-plans'
      
    );
    const fil = data.data;
    const fils = fil.plans;
    const std = fils.filter((x) => x.category === 'STUDENT');

    dispatch({
      type: SUBSCRIBE_STUDENT_SUCCESS,
      payload: std,
    });
  } catch (error) {
    dispatch({
      type: SUBSCRIBE_STUDENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
}

export const listProfessionalSub = () => async (dispatch) => {
  try {
    dispatch({ type: SUBSCRIBE_PROFESSIONAL_REQUEST })
    const { data } = await axios.get(
      `${process.env.REACT_APP_WEBSITE_URL}/api/sso-subscription-plans`
    )
    const fil = data.data
    const fils = fil.plans
    const std = fils.filter((x) => x.category === 'PROFESSIONAL')

    dispatch({
      type: SUBSCRIBE_PROFESSIONAL_SUCCESS,
      payload: std,
    })
  } catch (error) {
    dispatch({
      type: SUBSCRIBE_PROFESSIONAL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}

export const listEntrepreneurSub = () => async (dispatch) => {
  try {
    dispatch({ type: SUBSCRIBE_ENTREPRENEUR_REQUEST })
    const { data } = await axios.get(
      `${process.env.REACT_APP_WEBSITE_URL}/api/sso-subscription-plans`
    )
    const fil = data.data
    const fils = fil.plans
    const std = fils.filter((x) => x.category === 'ENTREPRENEUR')

    dispatch({
      type: SUBSCRIBE_ENTREPRENEUR_SUCCESS,
      payload: std,
    })
  } catch (error) {
    dispatch({
      type: SUBSCRIBE_ENTREPRENEUR_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}
