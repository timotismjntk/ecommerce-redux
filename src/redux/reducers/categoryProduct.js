const initialState = {
    data: {},
    info: {},
    isLoading: false,
    isError: false,
    alertMsg: ''
  }
  
  export default (state=initialState, action)=>{
    switch(action.type){
      case 'GET_CATEGORY_ITEM_PENDING' : {
        return {
          ...state,
          isLoading: true
        }
      }
      case 'GET_CATEGORY_ITEM_REJECTED': {
        return {
          ...state,
          isLoading: false,
          isError: true,
          alertMsg: 'There is an error at request data'
        }
      }
      case 'GET_CATEGORY_ITEM_FULFILLED': {
        // console.log(action.payload.data.results[0].total_rating)
        return {
          ...state,
          isLoading: false,
          data: action.payload.data.results
        }
      }
      default : {
        return state
      }
    }
  }