import { LOAD_RESOURCE, ADD_RESOURCE } from '../constants/ActionTypes'


const initialState = {
    resources: [],
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
    case ADD_RESOURCE:
      return {
          ...state,
          resources: [...state.resource, action.resource]
      }
    default:
      return state
  }
}