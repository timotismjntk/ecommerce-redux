const initialState = {
    isError: false,
    alertMsg: '',
    isLoading: true,
    info: {}
  }
  
  export default (state=initialState, action) => {
    switch(action.type){
      case 'GET_CHECKOUT_PENDING':{
        return {
          ...state,
          isLoading: true,
        }
      }
      case 'GET_CHECKOUT_REJECTED': {
        return {
          ...state,
          isLoading: false,
          isError: true,
          alertMsg: action.payload.response.data.error
        }
      }
      case 'GET_CHECKOUT_FULFILLED':{
        return {
          ...state,
          isLoading: false,
          info: action.payload.response.data.makeCheckOut
      }
        }
      case 'CLEAR_MESSAGE': {
        return {
          ...state,
          isError: false,
          alertMsg: '',
        }
      }
      default : {
        return state
      }
    }
  }