import { LOGIN, LOGOUT, } from '../constants/ActionTypes'

const initialState = {
    login: false,
    id: '',
    email: '',
    token: ''
  }

export default function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
          ...state,
          login: true,
          id: action.user.id,
          email: action.user.email,
          token: action.user.token
        }
    case LOGOUT:
        return initialState
    default:
      return state
  }
}
