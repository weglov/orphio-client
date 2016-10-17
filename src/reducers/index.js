import { combineReducers } from 'redux'
import login from './login'
import resource from './resource'
import m from './mistake'

const rootReducer = combineReducers({
  login,
  resource,
  m
})

export default rootReducer