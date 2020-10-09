import http from '../../helpers/http'
import qs from 'querystring'

export default {
  createCustomer: (data)=>({
    type: 'AUTH_USER',
    payload: http().post('auth/signup/',qs.stringify(data))
  }),
  clearMessage: ()=>({
    type: 'CLEAR_MESSAGE'
  }),
  clearMessageLen: ()=>({
    type: 'CLEAR_MESSAGE_LENGTH'
  }),
  passwordMatchCheck: ()=>({
    type: 'PASSWORD_MATCH'
  }),
  passwordLengthCheck: ()=>({
    type: 'PASSWORD_LENGTH'
  })
}