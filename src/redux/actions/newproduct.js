import http from "../../helpers/http";

export default {
  getNewProduct: (page = 1)=>{
    return {
      type: "GET_ITEM_NEW",
      payload: http().get(`public/product/new?page=${page}`)
    };
  }
};