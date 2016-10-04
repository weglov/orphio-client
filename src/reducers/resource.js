import { AUTHORIZATION } from '../constants/ActionTypes'

const initialState = {
    id: '',
    email: '',
    token: ''
  }

export default function authorization(state = initialState, action) {
  switch (action.type) {
    case AUTHORIZATION:
      return {
          ...state,
          id: action.id,
          email: action.email,
          token: action.token
        }
    default:
      return state
  }
}
