import http from "../../helpers/http";
import qs from "querystring";

export default {
  searchProduct: (data, data2={}, data3={})=>{
    return {
      type: "SEARCH_ITEM",
      payload: http().get(`public?${qs.stringify(data)}`)
    };
  }
};