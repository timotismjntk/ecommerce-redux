import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Container, CustomInput, Input , Row, Col, Label, Button} from 'reactstrap'

import '../assets/css/cart.css'
import MinusBtn from '../assets/images/kurang.svg'
import AddBtn from '../assets/images/tambah.svg'

import CheckoutAddressModal from '../component/CheckoutAddressModal'
import PaymentModal from '../component/PaymentModal'

import checkoutAction from '../redux/actions/checkout'
import addressAction from '../redux/actions/address'

const {REACT_APP_BACKEND_URL} = process.env

export default function Cart(props) {
    const token = useSelector(state=>state.auth.token)
    const dispatch = useDispatch()
    const [openModal, setOpenModal] = useState(false)
    const [openModalPayment, setOpenModalPayment] = useState(false)
    const [addressData, setAddressData] = useState([])
    const [checkoutData, setCheckoutData] = useState([])

    useEffect(()=>{
        dispatch(checkoutAction.getCheckout(token))
    }, [])
    useEffect(()=>{
        dispatch(addressAction.getAddress(token))
    }, [])

    const quantityState = useSelector(state=>state.checkout)
    const {data, delivery, totalPrice} = quantityState

    useEffect(() => {
        if (data) {
            setCheckoutData(data)
        }
    }, [data])

    const addressState = useSelector(state=>state.address)
    const {address} = addressState
    useEffect(()=>{
        if(address.length > 0){
            setAddressData(address[0])
            // setShow(true)
        }
    }, [address])

    const fullAddress = addressData.place + ', ' + addressData.city + ', ' + addressData.postal_code

    const gotoPayment = () => {
        if (address.length > 0) {
            setOpenModalPayment(true)
        }
    }

    return (
        <Container>
            <div className="main">
                <h1 className="category">Checkout</h1>
            </div>
            <div className="Cart d-flex flex-row mt-3">
                <div className="item-list d-flex flex-column">
                <h5 className="category">Shipping Address</h5>
                <div className="d-flex flex-column addressCheckout"> 
                    <h5 className="recipientName font-weight-bold">{addressData ? addressData.recipient_name : ''}</h5>
                    <span className="recipientAddress">{addressData.length > 0 ? fullAddress : ''}</span>
                    <div className='d-flex flex-start mt-3'>
                        <Button outline className="rounded" onClick={() => {setOpenModal(true)}}>
                            Choose Another Address
                        </Button>
                    </div>
                </div>
                <div className="bag-list">
                    {checkoutData.length > 0 ? Object.keys(checkoutData) && Object.length && checkoutData.map((items, index)=>{
                        return (
                    <div className="listOne d-flex justify-content-between flex-row align-items-center">
                        <div className="someOne d-flex align-items-center position-relative" style={{right: '-50px' }}>
                            <img className="jas" style={{width: '70px', height: '69px', objectFit: 'contain'}} src={REACT_APP_BACKEND_URL + items.url} alt='images' />
                            <div className="namaBarang mt-3 ml-4">
                                <p className="teks1">{items.name}</p>
                                {/* <p className="teks2">Zalora Cloth</p> */}
                            </div>
                        </div>
                    <div className="total-product col-3">
                        <p className="teks2 position-relative"><span className='font-weight-bold'>Price:</span> {items.price}</p>
                        <p className="teks2 position-relative"><span className='font-weight-bold'>Quantity:</span> {items.quantity}</p>
                    </div>
                    </div>
                    )}) : null}
                </div>
            </div>
                <div className="item-summary">
                    <h4>Shopping summary</h4>
                        <div className="total-price d-flex flex-row justify-content-between mt-5"> 
                            <p>Order</p>
                            <h5 className="harga">Rp. {totalPrice}</h5>
                        </div>
                        <div className="total-price d-flex flex-row justify-content-between"> 
                            <p>Delivery</p>
                            <h5 className="harga">Rp. {delivery}</h5>
                        </div>
                        <div className="mt-3 mb-3" style={{padding: 0.3, backgroundColor: 'rgba(0,0,0,0.3)'}} />
                        <div className="total-price d-flex flex-row justify-content-between"> 
                            <h5>Shopping Summary</h5>
                            <h4 style={{color: '#DB3022'}}>Rp. {totalPrice + delivery}</h4>
                        </div>
                    {address.length > 0 ? <button onClick={gotoPayment} className="buy-btn d-block mt-3">Select Payment</button> : <button disabled={true} className="buy-btn d-block mt-3" style={{backgroundColor: 'grey'}}>Select Payment</button>}
                </div>
            </div>
            <PaymentModal open={openModalPayment} close={() => setOpenModalPayment(false)} />
            <CheckoutAddressModal isOpen={openModal} isClose={() => setOpenModal(false)} />
        </Container>
    )
}
