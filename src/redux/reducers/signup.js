const initialState = {
    isError: false,
    alertMsg: '',
    isLoading: true,
    isMatch: false,
    isLength: false,
    pswdLenMsg: '',
    pswdMsg: ''
  }
  
  export default (state=initialState, action) => {
    switch(action.type){
      case 'AUTH_USER_PENDING':{
        return {
          ...state,
          isLoading: true,
        }
      }
      case 'AUTH_USER_REJECTED': {
        return {
          ...state,
          isLoading: false,
          isError: true,
          alertMsg: action.payload.response.data.error
        }
      }
      case 'AUTH_USER_FULFILLED':{
        return {
          ...state,
          isError: true,
          isLoading: false,
          alertMsg: 'Successfully to signup'
        }
      }
      case 'PASSWORD_MATCH' : {
        return {
          ...state,
          isLoading: false,
          isMatch: true,
          pswdMsg: 'Password didn\'t match'
        }
      }
      case 'PASSWORD_LENGTH' : {
        return {
          ...state,
          isLoading: false,
          isLength: true,
          pswdLenMsg: 'Password too short, minimal 8 characters'
        }
      }case 'CLEAR_MESSAGE_LENGTH': {
        return {
          ...state,
          isError: false,
          pswdLenMsg: '',
        }
      }
      case 'CLEAR_MESSAGE': {
        return {
          ...state,
          isError: false,
          alertMsg: '',
          pswdMsg: '',
          isMatch: false,
        }
      }
      default : {
        return state
      }
    }
  }