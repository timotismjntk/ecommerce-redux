import http from "../../helpers/http";

export default {
  getPopularProduct: (page = 1)=>{
    return {
      type: "GET_ITEM_POPULAR",
      payload: http().get(`public/product/popular?page=${page}`)
    };
  }
};