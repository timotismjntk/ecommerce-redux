import http from "../../helpers/http";
import qs from "querystring";


export default {
  getAddress: (token)=>{
    return {
      type: "GET_ADDRESS",
      payload: http(token).get("users/address")
    };
  },
  getPrimaryAddress: (token, id)=>{
    return {
      type: "GET_PRIMARY_ADDRESS",
      payload: http(token).get(`users/address/${id}`)
    };
  },
  chooseAddressPrimary: (token, id)=> {
    return {
      type: "CHOOSE_ADDRESS",
      payload: http(token).get(`users/address/choose/primary/${id}`)
    };
  },
  createAddress: (token, data)=> {
    return {
      type: "POST_ADDRESS",
      payload: http(token).post("users/address", qs.stringify(data))
    };
  },
  deleteAddress: (token, id)=> {
    // alert(qs.stringify(id))
    return {
      type: "DELETE_ADDRESS",
      payload: http(token).delete(`users/address/${id}`)
    };
  },
  patchAddress: (token, data, product_id) => {
    return {
      type: "PATCH_ADDRESS",
      payload: http(token).put("user/address/", qs.stringify(data), {product_id})
    };
  },
  clearMessage: () => {
    return {
      type: "CLEAR_MESSAGE"
    };
  }
};