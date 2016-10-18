import { LOAD_M, REQUEST_M, SOCKET_M } from '../constants/ActionTypes'
import merge from 'lodash/merge'

const initialState = {
    m: {},
    isFetching: true
  }


export default function mistake(state = initialState, action) {
  switch (action.type) {
    case REQUEST_M:
      return {
          ...state,
          m: merge(state.m, {[action.resource]: action.m}),
          isFetching: true,
        }
    case LOAD_M:
      return {
          ...state,
          m: merge(state.m, {[action.resource]: action.m}),
          isFetching: false
        }
    case SOCKET_M:
      return {
          ...state,
          m: {[action.resource]: action.m},
          isFetching: false
        }
    default:
      return state
  }
}