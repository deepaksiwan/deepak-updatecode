import axios from 'axios'
import {
  FOOTER_GET_REQUEST,
  FOOTER_GET_SUCCESS,
  FOOTER_GET_FAIL,
} from '../constants/footerConstants'



export const listFooter =
  ({ email }) =>
    async (dispatch) => {
      try {
        const config = {
          header: {
            'Content-Type': 'application/json',
          },
        }
        dispatch({ type: FOOTER_GET_REQUEST })
        const { data } = await axios.post(
          `http://localhost:5000/newsletter`,
          { email },
          config
        )
        const res = data.data

        dispatch({
          type: FOOTER_GET_SUCCESS,
          payload: res,
        })
      } catch (error) {
        dispatch({
          type: FOOTER_GET_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.response,
        })
      }
    }
