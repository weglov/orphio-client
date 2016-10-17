import { LOAD_RESOURCE, ACTIVE_RESOURCE, DELETE_RESOURCE, ADD_RESOURCE } from '../constants/ActionTypes'


const initialState = {
    resources: [],
    active: '',
    isFetching: true,
  	didInvalidate: false
  }


export default function resource(state = initialState, action) {
  switch (action.type) {
    case LOAD_RESOURCE:
      return {
          ...state,
          isFetching: false,
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
    case ADD_RESOURCE:
      return {
          ...state,
          isFetching: false,
          resources: [action.state, ...state.resources]
      }
    default:
      return state
  }
}