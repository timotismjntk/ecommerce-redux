import http from '../../helpers/http'

export default {
  getCatProduct: ()=>{
    return {
      type: 'GET_CATEGORY_ITEM',
      payload: http().get(`public/product/category`)
    }
  }
}