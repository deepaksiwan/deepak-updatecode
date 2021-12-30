import axios from 'axios';
import {
  PACKAGES_GET_REQUEST,
  PACKAGES_GET_SUCCESS,
  PACKAGES_GET_FAIL,
  PACKAGES_GET_SEARCH,
} from '../constants/packagesConstants';

export const listPackages = () => async (dispatch) => {
  try {
    dispatch({ type: PACKAGES_GET_REQUEST });
    const { data } = await axios.get(
      'https://mentorkart.org/api/sso-get-packages'
    );

    dispatch({
      type: PACKAGES_GET_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: PACKAGES_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const filterPackages = (chec) => async (dispatch) => {
  try {
    dispatch({ type: PACKAGES_GET_REQUEST })
    console.log(chec.toString())
    const { data } = await axios.get(
      'https://mentorkart.org/api/sso-get-packages'
     
    )
    const fil = data.data
    const d = chec
      .map((g) =>
        fil.filter((x) =>
          Object.values(x).join(',').toLowerCase().includes(g.toLowerCase())
        )
      )
      .flat()
    console.log(d)
    dispatch({
      type: PACKAGES_GET_SUCCESS,
      payload: d,
    })
  } catch (error) {
    console.log(error)
    dispatch({
      type: PACKAGES_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}

export const listStudentPackages = () => async (dispatch) => {
  try {
    dispatch({ type: PACKAGES_GET_REQUEST });
    const { data } = await axios.get(
      'https://mentorkart.org/api/sso-get-packages'
    );
    const fil = data.data;
    const std = fil.filter((x) =>
      x.user_category.split(',').includes('STUDENT')
    );

    dispatch({
      type: PACKAGES_GET_SUCCESS,
      payload: std,
    });
  } catch (error) {
    dispatch({
      type: PACKAGES_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const listProfessionalPackages = () => async (dispatch) => {
  try {
    dispatch({ type: PACKAGES_GET_REQUEST });
    const { data } = await axios.get(
      'https://mentorkart.org/api/sso-get-packages'
    );
    const fil = data.data;
    const std = fil.filter((x) =>
      x.user_category.split(',').includes('PROFESSIONAL')
    );

    dispatch({
      type: PACKAGES_GET_SUCCESS,
      payload: std,
    });
  } catch (error) {
    dispatch({
      type: PACKAGES_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const listEntrepreneurPackages = () => async (dispatch) => {
  try {
    dispatch({ type: PACKAGES_GET_REQUEST });
    const { data } = await axios.get(
      'https://mentorkart.org/api/sso-get-packages'
    );
    const fil = data.data;
    const std = fil.filter((x) =>
      x.user_category.split(',').includes('ENTREPRENEUR')
    );

    dispatch({
      type: PACKAGES_GET_SUCCESS,
      payload: std,
    });
  } catch (error) {
    dispatch({
      type: PACKAGES_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const searchPackages = (query) => async (dispatch) => {
  try {
    dispatch({ type: PACKAGES_GET_REQUEST });
    const { data } = await axios.get(
      'https://mentorkart.org/api/sso-get-packages'
    );
    const fil = data.data;
    let isFound;
    console.log('SEARCH PACKAGES ACTIONS:',fil);
    const std = fil.filter((x) => {
      if (x.package_name) {
        isFound = x.package_name.toLowerCase().includes(query.toLowerCase());
        if(isFound){
          return isFound;
        }
      }
      if(x.user_category) {
        isFound = x.user_category.toLowerCase().includes(query.toLowerCase());
        if(isFound){
          return isFound;
        }       
      }
      if (x.package_type) {
        isFound = x.package_type.toLowerCase().includes(query.toLowerCase());
        if(isFound){
          return isFound;
        }
      }
      if (x.from_date) {
        isFound = x.from_date.toLowerCase().includes(query.toLowerCase());
        if(isFound){
          return isFound;
        }
      }
      if (x.to_date) {
        isFound = x.to_date.toLowerCase().includes(query.toLowerCase());
        if(isFound){
          return isFound;
        }
      }
      if (x.description) {
        isFound = x.description.toLowerCase().includes(query.toLowerCase());
        if(isFound){
          return isFound;
        }
      }
      if (x.price_INR) {
        isFound = x.price_INR.toLowerCase().includes(query.toLowerCase());
        if(isFound){
          return isFound;
        }
      }
      return undefined;
    });

    // console.log(std);
    dispatch({
      type: PACKAGES_GET_SEARCH,
      payload: std,
    });
  } catch (error) {
    dispatch({
      type: PACKAGES_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};
