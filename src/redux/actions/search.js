import http from '../../helpers/http'
import qs from 'querystring'

export default {
  searchProduct: (data, data2={}, data3={})=>{
    //   alert(data)
    return {
      type: 'SEARCH_ITEM',
      payload: http().get(`http://localhost:8080/public/product/new?${qs.stringify(data)}`)
    }
  }
}


// searchProduct: (data, data2={}, data3={})=>{
//     //   alert(data)
//     return {
//       type: 'SEARCH_ITEM',
//       payload: http().get(`http://localhost:8080/public?${qs.stringify(data) + `&orderBy[${data2}]=${data3}`}`)
//     }
//   }