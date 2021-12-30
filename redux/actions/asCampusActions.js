import axios from 'axios';
import {
  CAMPUS_GET_REQUEST,
  CAMPUS_GET_SUCCESS,
  CAMPUS_GET_FAIL,
} from '../constants/asCampusConstants';

export const asCampus =
  ({ name, email, phone, orgName, message, address, designation }) =>
  async (dispatch) => {
    try {
      const config = {
        header: {
          'Content-type': 'multipart/form-data',
        },
      };

      dispatch({ type: CAMPUS_GET_REQUEST });
      const { data } = await axios.post(
        'https://www.test.pinsoutinnovation.com/campus',
        { name, email, phone, orgName, message, address, designation },
        config
      );
      console.log(data);

      dispatch({
        type: CAMPUS_GET_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CAMPUS_GET_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response,
      });
    }
  };

export const asOrganisation =
  ({ name, email, phone, orgName, message, address, designation }) =>
  async (dispatch) => {
    try {
      const config = {
        header: {
          'Content-type': 'multipart/form-data',
        },
      };

      dispatch({ type: CAMPUS_GET_REQUEST });
      const { data } = await axios.post(
        'http://localhost:5000/organisation',
        { name, email, phone, orgName, message, address, designation },
        config
      );
      console.log(data);

      dispatch({
        type: CAMPUS_GET_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CAMPUS_GET_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response,
      });
    }
  };

export const beMentor =
  ({
    name,
    email,
    phone,
    gender,
    linkedIn,
    dob,
    address,
    interests,
    whomToMentor,
    industry,
    otherIndustry,
    firstPref,
    secondPref,
    thirdPref,
    designation,
    about,
    getToKnow,
    grad_college,
    grad_degree,
    grad_year,
    post_grad_college,
    post_grad_degree,
    post_grad_year,
  }) =>
  async (dispatch) => {
    try {
      const config = {
        header: {
          'Content-type': 'multipart/form-data',
        },
      };

      dispatch({ type: CAMPUS_GET_REQUEST });
      const { data } = await axios.post(
        'http://localhost:5000/be-a-mentor',
        {
          name,
          email,
          phone,
          gender,
          linkedIn,
          dob,
          address,
          interests,
          whomToMentor,
          industry,
          otherIndustry,
          firstPref,
          secondPref,
          thirdPref,
          designation,
          about,
          getToKnow,
          grad_college,
          grad_degree,
          grad_year,
          post_grad_college,
          post_grad_degree,
          post_grad_year,
        },
        config
      );
      console.log(data);
      
      dispatch({
        type: CAMPUS_GET_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CAMPUS_GET_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response,
      });
    }
  };
