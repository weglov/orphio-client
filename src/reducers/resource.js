import { LOAD_RESOURCE } from '../constants/ActionTypes'


const initialState = {
    resource: {},
    isFetching: false,
  	didInvalidate: false
  }


export default function resource(state = initialState, action) {
  switch (action.type) {
    case LOAD_RESOURCE:
      return {
          ...state,
          resource: action.resource
        }
    default:
      return state
  }
}