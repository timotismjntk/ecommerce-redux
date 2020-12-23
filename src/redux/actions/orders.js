import http from "../../helpers/http";
import qs from "querystring";

export default {
  createOrdersAndTransactions: (token, data)=>{
    return {
      type: "CREATE_ORDER_TRANSACTION",
      payload: http(token).post("order/auto", qs.stringify(data))
    };
  },
  readOrders: (token) => {
    return {
      type: "READ_ORDERS",
      payload: http(token).get("order")
    };
  },
  clearMessage: ()=> {
    return {
      type: "CLEAR_MESSAGE",
    };
  }
};