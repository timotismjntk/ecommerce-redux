import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Container, Alert, Button, Form, Input } from 'reactstrap'
import { Link } from 'react-router-dom'
import loginAction from '../redux/actions/auth'
import profileAction from '../redux/actions/profile'

//Import component navbar

export default function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isDisplay, setIsDisplay] = useState(false)
    const [changeColor, setChangeColor] = useState(false)
    const dispatch = useDispatch()

    const LoginState = useSelector(state=>state.auth)
    const token = useSelector(state=>state.auth.token)

    const displayHandler = () => {
        setIsDisplay(false)
        setChangeColor(false)
    }
    const displayHandler2 = () => {
        setIsDisplay(true)
        setChangeColor(true)
        setPassword('')
        setEmail('')
    }


    const login = (e) => {
        e.preventDefault()
        let data = {
        email,
        password
        }
        setTimeout(() =>{
            dispatch(loginAction.login(data))
        }, 500)
    }
   
    const {
      isError, 
      alertMsg,
      isLogin
  } = LoginState

    useEffect(()=>{
        console.log(props.history)
      if(isLogin) {
        dispatch(profileAction.getProfile(token))
        setTimeout(()=>{
            props.history.push('/user/profile')
        }, 300)
        // props.history.push('/')
      }
    }, [isLogin, props, dispatch, token])
    
    return (
        <React.Fragment>
            <Container className="form d-flex flex-column justify-content-center align-items-center mt-3">
                <div className="header text-center">
                    <div className="logo mb-5">
                        <img src={require('../assets/images/logo.svg')} alt="brand" />
                    </div>
                    <div className="message">
                        <span>Please sign up with your account</span>
                    </div>
                </div>
                <div className="btn-group switch" role="group">
                    <Button type="button" onClick={displayHandler} style={changeColor ? {backgroundColor: '#FFFFFF', border: '1px solid #9B9B9B', color: '#9B9B9B'} : {backgroundColor: '#DB3022',border: '1px solid #9B9B9B'}}  className="btn btn-primary">Customer</Button>
                    <Button type="button" onClick={displayHandler2} style={changeColor ? {backgroundColor: '#DB3022', border: '1px solid #9B9B9B', color: '#FFFFFF'} : {backgroundColor: '#FFFFFF', border: '1px solid #9B9B9B', color: '#9B9B9B'}} className="btn btn-light">Seller</Button>
                </div>

                <Form onSubmit={login} className='auth'>
                    <div className="form Customer" id="form1">
                    <Alert color={isError?'danger':'success'} isOpen={isError}>{alertMsg}</Alert>
                        <div className="form-group input">
                            <Input onChange={(e)=>{setEmail(e.target.value)}} name='email' value={email} type='email' id='email' placeholder="Email" required/>
                        </div>
                        <div className="form-group input">
                            <Input autoComplete='off' onChange={(e)=>{setPassword(e.target.value)}} name='password' value={password} type='password' id='password' placeholder="Password" required/>
                        </div>
                        <div className="button">
                        <Button type='submit' className='mt-2 button w-100 rounded-pill' style={{backgroundColor: '#DB3022'}}>Login</Button>
                        </div>
                    </div>
                </Form>
                <div className="d-flex align-items-center">
                  <span>Don't have an account?</span>
                  <Link to="/signup" className="nav-link register-link">Register</Link>
                </div>
            </Container>
        </React.Fragment>
    )
}
