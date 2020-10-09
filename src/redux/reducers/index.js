import {combineReducers} from 'redux'

import auth from './auth'
import signup from './signup'
import counter from './counter'
import episode from './episode'
import profile from './profile'

export default combineReducers({
  counter,
  auth,
  signup,
  episode,
  profile
})