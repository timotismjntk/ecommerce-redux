import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Form, Label, Button, Input, FormGroup  } from 'reactstrap'
import { useHistory } from 'react-router-dom'

import ModalResponse from './ModalResponse'

import ordersTransaction from '../redux/actions/orders'

import logo from '../assets/images/brand.png'

export default function PaymentModal(props) {
    const {
        open,
        close
    } = props
    
    let [modalOpen, setModalOpen] = useState(open);
    const [modalMessage, setModalMessage] = useState(false);
    const [backdrop, setBackdrop] = useState(true);
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if (open === true){
            setModalOpen(open)
        }
        // alert(isOpen)
    }, [open, close]);
    
    const closeModal = () => {
        setModalOpen(close)
    }

    const checkoutState = useSelector(state=>state.checkout)
    const {data, delivery, totalPrice} = checkoutState

    const addressState =  useSelector(state=>state.address)
    const token = useSelector(state=>state.auth.token)
    const {address} = addressState

    const [quantity, setQuantity] = useState(null)

    useEffect(() => {
        if (data) {
            data.forEach((el) => {
                setQuantity(quantity + el.quantity)
            })
        }
    }, [data])

    const proccessPayment = async () => {
        const create = {
            summary: totalPrice,
            delivery_fee: delivery,
            delivery_address: address[0].recipient_name + ', ' + address[0].address_name + ', ' + address[0].city + ', ' + address[0].postal_code,
            total_quantity: quantity
        }
        if (totalPrice && delivery && address.length > 0 && quantity !== null) {
            await dispatch(ordersTransaction.createOrdersAndTransactions(token, create))
        }
    }

    const orderState =  useSelector(state=>state.orders)
    const {isCreated, alertMsg} = orderState

    useEffect(() => {
        if (isCreated) {
            setModalMessage(true)
            setTimeout(() => {
                history.push('/')
                dispatch(ordersTransaction.clearMessage())
            }, 1500)
        }
    }, [isCreated])

    return (
        <React.Fragment >
            <Modal isOpen={open} toggle={closeModal} backdrop={backdrop} className="modal-dialog">
                <ModalHeader toggle={closeModal}>
                    <h4>Payment</h4>
                </ModalHeader>
                <ModalBody>
                    <Row>
                        <Col md="12">
                            <h5>Payment Method</h5>
                        </Col>
                        <Col md="12" className="mt-3">
                            <div className='d-flex' style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between'}}>
                                <img src={logo} />
                                <h5 className="mt-3">Blanja</h5>
                                <input className="mt-2" type="checkbox" checked={true} />
                            </div>
                        </Col>
                    </Row>
                    <div style={{flex: 1, backgroundColor: '#F4F4F4', padding: 1.5}} className="mt-4 mb-4" />
                    <h5>Shopping Summary</h5>
                    <div className="total-price d-flex flex-row justify-content-between"> 
                        <h5 className="text-secondary">Order</h5>
                        <h5>Rp. {totalPrice}</h5>
                    </div>
                    <div className="total-price d-flex flex-row justify-content-between"> 
                        <h5 className="text-secondary">Delivery</h5>
                        <h5>Rp. {delivery}</h5>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <div className="d-flex" style={{alignItems: 'center', justifyContent: 'space-between'}}>
                        <div style={{flexDirection: 'column', marginRight: 175}}>
                            <span style={{fontWeight: 'bold'}}>Shopping Summary</span>
                            <p style={{color: '#DB3022', fontWeight: 'bold'}}>Rp. {totalPrice + delivery}</p>
                        </div>
                        <Button onClick={proccessPayment} style={{width: 160, borderRadius: 30, backgroundColor: '#DB3022', color: 'white'}}>Buy</Button>
                    </div>
                </ModalFooter>
            </Modal>
            <ModalResponse open={modalMessage} close={()=>{setModalMessage(false)}} message={alertMsg}/>
        </React.Fragment>
    )
}
