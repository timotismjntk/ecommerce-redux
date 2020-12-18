import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'

import Navbar from '../component/Navbar'
import CustomerCart from '../component/Cartproduct'
import profileAction from '../redux/actions/profile'


export default function Cart(props) {
    const token = useSelector(state=>state.auth.token)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        if (token) {
        dispatch(profileAction.getProfile(token))
        }
    },[token])

    return (
        <div>
            <Navbar />
            <div className='mt-5'>
                <CustomerCart />
            </div>
        </div>
    )
}
