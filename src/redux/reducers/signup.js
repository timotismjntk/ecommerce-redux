const initialState = {
    checkError: false,
    alertMsg: '',
    loading: true,
    match: false,
    length: false,
    pswdLenMsg: '',
    pswdMsg: ''
  }
  
  export default (state=initialState, action) => {
    switch(action.type){
      case 'SIGNUP_USER_PENDING':{
        return {
          ...state,
          loading: true,
        }
      }
      case 'SIGNUP_USER_REJECTED': {
        return {
          ...state,
          loading: false,
          checkError: true,
          alertMsg: action.payload.response.data.error
        }
      }
      case 'SIGNUP_USER_FULFILLED':{
        return {
          ...state,
          checkError: false,
          loading: false,
          alertMsg: 'Successfully to signup'
        }
      }
      case 'PASSWORD_MATCH' : {
        return {
          ...state,
          loading: false,
          match: true,
          pswdMsg: 'Password didn\'t match'
        }
      }
      case 'PASSWORD_LENGTH' : {
        return {
          ...state,
          loading: false,
          length: true,
          pswdLenMsg: 'Password too short, minimal 8 characters'
        }
      }case 'CLEAR_MESSAGE_LENGTH': {
        return {
          ...state,
          checkError: false,
          pswdLenMsg: '',
        }
      }
      case 'CLEAR_MESSAGE': {
        return {
          ...state,
          checkError: false,
          alertMsg: '',
          pswdMsg: '',
          match: false,
        }
      }
      default : {
        return state
      }
    }
  }