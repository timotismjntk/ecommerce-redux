import {combineReducers} from 'redux'

import auth from './auth'
import signup from './signup'
import counter from './counter'
import episode from './episode'
import profile from './profile'
import newproduct from './newproduct'
import popularproduct from './popular'
import categoryproduct from './categoryProduct'
import detailproduct from './detailProduct'
import checkout from './checkout'
import cart from './cart'
import search from './search'
import address from './address'

export default combineReducers({
  counter,
  auth,
  signup,
  episode,
  profile,
  newproduct,
  popularproduct,
  categoryproduct,
  detailproduct,
  checkout,
  cart,
  search,
  address
})