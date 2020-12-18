const initialState = {
  isError: false,
  alertMsg: "",
  isLoading: false,
  isAdded: false,
  data: []
};
    
export default (state=initialState, action) => {
  switch(action.type){
  case "CREATE_ORDER_TRANSACTION_PENDING":{
    return {
      ...state,
      isLoading: true,
    };
  }
  case "CREATE_ORDER_TRANSACTION_REJECTED":{
    return {
      ...state,
      isLoading: false,
      isError: true,
      alertMsg: action.payload.response.data.message
    };
  }
  case "CREATE_ORDER_TRANSACTION_FULFILLED":{
    return {
      ...state,
      isLoading: false,
      alertMsg: "Success",
      isCreated: true,
    };
  }
  case "READ_ORDERS_PENDING":{
    return {
      ...state,
      isLoading: true,
    };
  }
  case "READ_ORDERS_REJECTED": {
    return {
      ...state,
      isLoading: false,
      isError: true,
      alertMsg: action.payload.response.data.error
    };
  }
  case "READ_ORDERS_FULFILLED":{
    return {
      ...state,
      isLoading: false,
      data: action.payload.data.results,
    };
  }
  case "CLEAR_MESSAGE": {
    return {
      ...state,
      isError: false,
      alertMsg: "",
      isLoading: false,
      isAdded: false,
      isCreated: false
    };
  }
  default : {
    return state;
  }
  }
};