import axios from 'axios'
import {
  PARTNER_GET_REQUEST,
  PARTNER_GET_SUCCESS,
  PARTNER_GET_FAIL,
} from '../constants/partnerConstants'

export const listpartner = () => async (dispatch) => {
  try {
    dispatch({ type: PARTNER_GET_REQUEST })
    const { data } = await axios.get(
      `${process.env.REACT_APP_WEBSITE_URL_PINS}/partners`
    )

    dispatch({
      type: PARTNER_GET_SUCCESS,
      payload: [data],
    })
  } catch (error) {
    dispatch({
      type: PARTNER_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}
