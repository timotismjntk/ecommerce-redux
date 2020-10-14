const initialState = {
  data: {},
  info: {},
  isLoading: false,
  isError: false,
  alertMsg: '',
  updated: false
}

export default (state=initialState, action)=>{
  switch(action.type){
    case 'GET_PROFILE_PENDING' : {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'GET_PROFILE_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'There is an error at request data'
      }
    }
    case 'GET_PROFILE_FULFILLED': {
      console.log(action.payload)
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.userId[0]
      }
    }
    case 'PATCH_PROFILE_PENDING' : {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'PATCH_PROFILE_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'There is an error at request data'
      }
    }
    case 'PATCH_PROFILE_FULFILLED': {
      console.log(action.payload)
      return {
        ...state,
        isLoading: false,
        alertMsg: 'Profile updated',
        updated: true
      }
    }
    default : {
      return state
    }
  }
}