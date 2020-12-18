import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Container, Alert, Button, Form, Input, Label } from 'reactstrap'
import { Link } from 'react-router-dom'
import signUpAction from '../redux/actions/signup'


export default function Signup(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [phone_number, setPhoneNumber] = useState('')
    const [storeName, setStoreName] = useState('')
    const [isDisplay, setIsDisplay] = useState(false)
    const [changeColor, setChangeColor] = useState(false)
    const dispatch = useDispatch()

    const SignupState = useSelector(state=>state.signup)

    const displayHandler = () => {
        setIsDisplay(false)
        setChangeColor(false)
        setPhoneNumber('')
        setStoreName('')
    }
    const displayHandler2 = () => {
        setIsDisplay(true)
        setChangeColor(true)
        setName('')
        setPassword('')
        setEmail('')
        setPhoneNumber('')
        setStoreName('')
    }


    const signup = (e) => {
        e.preventDefault()
        let data = {
        name,
        email,
        password,
        phone_number,
        storeName
        }
        if(storeName.length===0) {
            data = {
                name,
                email,
                password,
            }
        }
        setTimeout(() =>{
            dispatch(signUpAction.createCustomer(data))
        }, 1000)
    }

    
    const {
        checkError, 
        match, 
        pswdMsg, 
        alertMsg,
        length,
        pswdLenMsg
    } = SignupState
    
    // useEffect(() => {
    //     if(checkError){
    //         setPassword('')
    //         setConfPassword('')
    //     }
    // }, [checkError])

    useEffect(()=>{
        if(password.length > 0 && password.length < 8) {
            console.log(password.length)
            dispatch(signUpAction.passwordLengthCheck())
        }else {
            dispatch(signUpAction.clearMessageLen())
        }

        
        if(isDisplay) {
            setConfPassword('')
        }
    }, [dispatch, password, length, isDisplay])

    useEffect(()=>{
        // alert(confPassword)
        if(password !== confPassword) {
            dispatch(signUpAction.passwordMatchCheck())
        }else {
            dispatch(signUpAction.clearMessage())
        }
    }, [dispatch, password, confPassword, match])
    
    console.log(SignupState)
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

                <Form onSubmit={signup} className='auth'>
                    <Alert color={checkError?'danger':'success'} className='font-weight-bold' isOpen={checkError} toggle={()=>{dispatch(signUpAction.clearMessage())}}>Email Already registered with another account!</Alert>
                    <div className="form Customer" id="form1">
                        <Alert color={checkError?'danger':'success'} className='font-weight-bold' isOpen={!checkError && alertMsg} toggle={()=>{dispatch(signUpAction.clearMessage())}}>{alertMsg}</Alert>
                        <div className="form-group input">
                            <Input onChange={(e)=>{setName(e.target.value)}} name='name' value={name} type='text' id='name' className='w-100' placeholder="Name" required/>
                        </div>
                        <div className="form-group input">
                            <Input onChange={(e)=>{setEmail(e.target.value)}} name='email' value={email} type='email' style={checkError ? {border: '1px solid #e35940'} : null} id='email' placeholder="Email" required/>
                            <span className='mb-2 font-weight-bold' style={checkError ? {display: 'block', color: 'red', fontSize: '14px'} : {display: 'none'}}>{alertMsg}</span>
                        </div>

                        <div className="form-group input">
                            <Input onChange={(e)=>{setPhoneNumber(e.target.value)}} name='phone_number' value={phone_number} style={!isDisplay ? {display: 'none'} : {display: 'block'}} type='phone' id='phone' placeholder="Phone Number" />
                        </div>
                        <div className="form-group input">
                            <Input onChange={(e)=>{setStoreName(e.target.value)}} name='storeName' value={storeName} style={!isDisplay ? {display: 'none'} : {display: 'block'}} type='name' id='storeName' placeholder="Store Name" />
                        </div>
                        <div className="form-group input">
                            <Input autoComplete='off' onChange={(e)=>{setPassword(e.target.value)}} name='password' value={password} type='password' id='password' placeholder="Password" required/>
                            <span className='mb-2 font-weight-bold' style={length ? {display: 'block', color: 'red', fontSize: '14px'} : {display: 'none'}}>{pswdLenMsg}</span>
                        </div>       
                        <div className="button"></div>
                        <div className="form-group input">
                            <Input autoComplete='off' onChange={(e)=>{setConfPassword(e.target.value)}} name='confPassword' value={confPassword} type='password' id='password' placeholder="Confirm Password" required/>
                            <span className='mb-2 font-weight-bold' style={match ? {display: 'block', color: 'red', fontSize: '14px'} : {display: 'none'}}>{pswdMsg}</span>
                        </div>
                        <div className="button">
                            <Button type='submit' className='mt-2 button w-100 rounded-pill' style={{backgroundColor: '#DB3022'}}>Register</Button>
                        </div>
                    </div>
                </Form>
                <div className="d-flex align-items-center">
                    <span className>Already have a Tokopedia account?</span>
                    <Link to="/login" className="nav-link" style={{color: '#DB3022'}}>Login</Link>
                </div>
            </Container>
        </React.Fragment>
    )
}
