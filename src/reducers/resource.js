import { LOAD_RESOURCE, ACTIVE_RESOURCE, DELETE_RESOURCE } from '../constants/ActionTypes'


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
    case DELETE_RESOURCE:
      return {
          ...state,
          resources: [...state.resources.slice(0, action.id), ...state.resources.slice(action.id + 1)]
      }
    default:
      return state
  }
}