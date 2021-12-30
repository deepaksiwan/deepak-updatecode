import axios from 'axios'
import {
  ADVERTISEMENTS_GET_REQUEST,
  ADVERTISEMENTS_GET_SUCCESS,
  ADVERTISEMENTS_GET_FAIL,
} from '../constants/advertisementsConstants'

export const listAdvertisements = () => async (dispatch) => {
  try {
    dispatch({ type: ADVERTISEMENTS_GET_REQUEST })
    const { data } = await axios.get(
      'https://www.test.pinsoutinnovation.com/advertisements'
    )

    dispatch({
      type: ADVERTISEMENTS_GET_SUCCESS,
      payload: [data],
    })
  } catch (error) {
    dispatch({
      type: ADVERTISEMENTS_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}
