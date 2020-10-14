import http from '../../helpers/http'

export default {
  getPopularProduct: ()=>{
    return {
      type: 'GET_ITEM_POPULAR',
      payload: http().get(`public/product/popular`)
    }
  }
}