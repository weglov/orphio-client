import { LOAD_M, REQUEST_M } from '../constants/ActionTypes'


const initialState = {
    m: {},
    isFetching: true
  }


export default function m(state = initialState, action) {
  switch (action.type) {
    case REQUEST_M:
      return {
          ...state,
          m: {[action.resource]: {}},
          isFetching: true,
        }
    case LOAD_M:
      return {
          ...state,
          m: {[action.resource]: action.m},
          isFetching: false
        }
    default:
      return state
  }
}