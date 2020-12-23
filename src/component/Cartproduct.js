import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Container, CustomInput, Input , Row, Col, Label, Button} from 'reactstrap'
import { useHistory } from 'react-router-dom'

import '../assets/css/cart.css'
import MinusBtn from '../assets/images/kurang.svg'
import AddBtn from '../assets/images/tambah.svg'

import qs from 'querystring'

import cartAction from '../redux/actions/cart'


export default function Cart(props) {

    const {REACT_APP_BACKEND_URL} = process.env
    const history = useHistory()

    // const {data} = props
    const token = useSelector(state=>state.auth.token)
    // console.log(quantity)
    // const quantityState = useSelector(state=>state.cart)
    // const {quantity} = quantityState

    const dispatch = useDispatch()
    // console.log(data)
    
    const [qty, setQty] = useState(0)
    const [cartId, setCartId] = useState([])
    const [product_id, setProductId] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [isDelete, setDelete] = useState(false)
    const [checkAll, setCheckAll] = useState(false)
    const [check, setCheck] = useState(null)
    const [checkArray, setCheckArray] = useState([])

    useEffect(()=>{
        if (checkAll === false) {
            setTotalPrice(0)
        }
    }, [checkAll])

    useEffect(()=>{
        setTimeout(()=>{
            dispatch(cartAction.getCart(token))
        }, 200)
    }, [dispatch, token])
    const increaseAmountProductCart = (id) => {
        setCartId(id)
    }
    
    const decreaseAmountProductCart = (id) => {
        setCartId(id)
    }

    const quantityState = useSelector(state=>state.cart)
    const {data, isError, isLoading, isSelected, totalSummary} = quantityState
   
    useEffect(()=>{
        if(isLoading) {
            dispatch(cartAction.getCart(token))
        }
    }, [isLoading])
    
    useEffect(()=>{
        if(isDelete) {
            dispatch(cartAction.deleteCart(token, cartId))
            setDelete(false)
        }
    }, [cartId, dispatch, token, isSelected, isDelete])

    useEffect(()=>{
        if (data.length > 0) {
            data.map((items)=>{
                let a = 0
                a += items
            })
        }
    }, [data])

    useEffect(()=>{
        if(qty){
            let data = {
                product_id: product_id,
                quantity: qty
            }
            dispatch(cartAction.patchQuantityCart(token, data, {user_id: cartId}, product_id))
            setTimeout(() =>{
                dispatch(cartAction.getCart(token))               
            })
        } 
    }, [qty])

    const gotoCheckout = () => {
        history.push('/user/checkout')
    }

    return (
        <Container>
            <div className="main">
                <h1 className="category">My bag</h1>
            </div>
            <div className="Cart d-flex flex-row">
                <div className="item-list d-flex flex-column">
                    <div className="main-list d-flex justify-content-between flex-row align-items-center">
                        <div className="desc-main d-flex align-items-center justify-content-between w-100">
                            <div className="desc-info1 d-flex justify-content-around align-items-center flex-row">
                                <div className="d-flex align-items-center justify-content-between">
                                    <Input type="checkbox" checked={true} /> 
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-3">
                                <p className="teks1 mr-2">Select all items</p>
                                <p className="teks2"> ({data.length} items selected)</p>
                            </div>
                            <div style={{marginLeft: '200px'}}>
                                <Button disabled={true} className="d-flex align-items-center btn-light ml-auto">
                                    Delete
                                </Button>
                            </div>
                        </div>
                    </div>
                <div className="bag-list">
                    {data.length > 0 ? Object.keys(data) && Object.length && data.map((items, index)=>{
                        return (
                    <div className="listOne d-flex justify-content-between flex-row align-items-center">
                    <div className="d-flex align-items-center position-relative" style={{right: '-28px'}}>
                        <Input type="checkbox" checked={true}></Input>
                    </div>
                    <div className="someOne d-flex align-items-center position-relative" style={{right: '-50px' }}>
                        <img className="jas" style={{width: '70px', height: '69px', objectFit: 'contain'}} src={REACT_APP_BACKEND_URL + items.url} alt='images' />
                        <div className="namaBarang mt-3 ml-4">
                            <p className="teks1">{items.name.length > 30 ? items.name.slice(0, 28) + '...' : items.name}</p>
                            {/* <p className="teks2">Zalora Cloth</p> */}
                        </div>
                    </div>
                    <div className="total-product col-3 mt-3">
                        <div className="btn-jumlah d-flex flex-row justify-content-between align-items-center">
                            <Button onClick={() => {decreaseAmountProductCart(items.id); setProductId(items.product_id); setQty(items.quantity - 1)}} className="btn btn-light btn-kurang rounded-circle" name="button"><img className="kurang" src={MinusBtn} alt='btn-nav'/></Button>
                            <p className="mt-3">{items.quantity}</p>
                            <Button  onClick={() => {increaseAmountProductCart(items.id); setProductId(items.product_id); setQty(items.quantity + 1)}} outline color='secondary' className="btn btn-tambah rounded-circle"><img className="tambah" src={AddBtn} alt='btn-nav'/></Button>
                        </div>
                        <p className="teks2 position-relative"><span className='font-weight-bold'>Price:</span> {items.price}</p>
                    </div>
                </div>
                )}) : null}

                </div>
                </div>
                <div className="item-summary">
                    <h4>Shopping summary</h4>
                        <div className="total-price d-flex flex-row justify-content-between mt-5"> 
                            <p>Total price</p>
                            <h5 className="harga">Rp. {data.length > 0 ? totalSummary : 0}</h5>
                        </div>
                    <button onClick={gotoCheckout} disabled={data.length > 0 ? false : true} className="buy-btn d-block mt-3">Buy</button>
                </div>
            </div>
        </Container>
    )
}
