import { combineReducers } from 'redux'
import login from './login'
import resource from './resource'
import mistake from './mistake'

const rootReducer = combineReducers({
  login,
  resource,
  mistake
})

export default rootReducer