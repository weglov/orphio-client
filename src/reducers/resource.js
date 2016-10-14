import { LOAD_RESOURCE, ACTIVE_RESOURCE } from '../constants/ActionTypes'


const initialState = {
    resources: [],
    active: '',
    isFetching: false,
  	didInvalidate: false
  }


export default function resource(state = initialState, action) {
  switch (action.type) {
    case LOAD_RESOURCE:
      return {
          ...state,
          resources: action.resource
        }
    case ACTIVE_RESOURCE:
      return {
          ...state,
          active: action.id
      }
    default:
      return state
  }
}