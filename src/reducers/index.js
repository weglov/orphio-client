import { combineReducers } from 'redux'
import login from './login'
import resource from './resource'


const rootReducer = combineReducers({
  login,
  resource
})

export default rootReducer