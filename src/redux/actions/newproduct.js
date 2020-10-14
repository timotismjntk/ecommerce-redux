import http from '../../helpers/http'

export default {
  getNewProduct: ()=>{
    return {
      type: 'GET_ITEM',
      payload: http().get(`public/product/new`)
    }
  }
}