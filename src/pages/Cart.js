import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Container, CustomInput, Input , Row, Col, Label, Button} from 'reactstrap'

import Navbar from '../component/Navbar'
import CustomerCart from '../component/Cartproduct'
import cartAction from '../redux/actions/cart'


export default function Cart(props) {

    // const token = useSelector(state=>state.auth.token)
    // const dispatch = useDispatch()

    // const quantityState = useSelector(state=>state.cart)
    // const {info, isError, isLoading} = quantityState
    // useEffect(()=>{
    //     if(isLoading && !isError) {
    //         dispatch(cartAction.getCart(token))
    //     }
    // }, [dispatch, isLoading, isError, token])
    
    return (
        <div>
            <Navbar />
            <div className='mt-5'>
                <CustomerCart />
            </div>
        </div>
    )
}
