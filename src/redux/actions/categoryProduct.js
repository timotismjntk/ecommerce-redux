import http from '../../helpers/http'

export default {
  getCatProduct: ()=>{
    return {
      type: 'GET_CATEGORY_ITEM',
      payload: http().get(`public/product/category?limit=50`)
    }
  },
  getProductByCategory: (search = '')=>{
    return {
      type: 'GET_CATEGORY_BY_NAME',
      payload: http().get(`public?search[category.category_name]=${search}`)
    }
  }
}