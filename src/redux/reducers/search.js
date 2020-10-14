const initialState = {
    results: {},
    isLoading: false,
    isError: false,
    alertMsg: '',
    searchHistory: ''
  }
  
  export default (state=initialState, action)=>{
    switch(action.type){
      case 'SEARCH_ITEM_PENDING' : {
        return {
          ...state,
          isLoading: true
        }
      }
      case 'SEARCH_ITEM_REJECTED': {
        return {
          ...state,
          isLoading: false,
          isError: true,
          alertMsg: 'There is an error at request data'
        }
      }
      case 'SEARCH_ITEM_FULFILLED': {
        // console.log(action.payload.data.results[0].total_rating)
        return {
          ...state,
          isLoading: false,
          results: action.payload.data.results
        }
      }
      default : {
        return state
      }
    }
  }