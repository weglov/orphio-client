import { combineReducers } from 'redux'
import login from './login'
import resource from './resource'

export default combineReducers({
  login,
  resource
})