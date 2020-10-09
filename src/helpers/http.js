import {default as axios} from 'axios'

const {REACT_APP_BACKEND_URL} = process.env

const http = (token=false)=>{
  return axios.create({
    baseURL: 'http://localhost:8080/',
    headers: {
      'Authorization': token?`Bearer ${token}`:undefined
    }
  })
}

export default http