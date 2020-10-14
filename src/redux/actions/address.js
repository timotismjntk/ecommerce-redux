import http from '../../helpers/http'
import qs from 'querystring'


export default {
   getAddress: (token)=>{
    return {
        type: 'GET_ADDRESS',
        payload: http(token).get(`users/address`)
    }
  },
  getPrimaryAddress: (token, id)=>{
    return {
      type: 'GET_PRIMARY_ADDRESS',
      payload: http(token).get(`users/address/${id}`)
    }
  },
  createAddress: (token, data)=> {
      alert(token)
      return {
          type: 'POST_CART',
          payload: http(token).post('users/address', qs.stringify(data))
      }
  },
  deleteAddress: (token, id)=> {
      // alert(qs.stringify(id))
      return {
          type: 'DELETE_CART',
          payload: http(token).delete(`users/address/${id}`)
      }
  },
  patchAddress: (token, data, product_id) => {
    return {
      type: 'PATCH_ADDRESS',
      payload: http(token).put(`user/cart/`, qs.stringify(data), {product_id})
    }
  }
}