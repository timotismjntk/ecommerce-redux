import http from "../../helpers/http";

export default {
  getProduct: (page = 1)=>{
    return {
      type: "GET_ITEM_POPULAR",
      payload: http().get(`public?page=${page}`)
    };
  }
};