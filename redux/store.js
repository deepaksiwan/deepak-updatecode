import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducers from '../redux/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const loginFromStorage = localStorage.getItem('userInfo' ) ? 
   JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  login: { loginUser: loginFromStorage },
}

export const store = createStore(
  rootReducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)
