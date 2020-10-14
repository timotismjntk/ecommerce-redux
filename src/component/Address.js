import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Button} from 'reactstrap'

import '../assets/css/address.css';
import addressAction from '../redux/actions/address'

import AddressModal from './AddressModal.js'

export default function Address(props) {
    const user = useSelector(state=>state.profile)
    const token = useSelector(state=>state.auth.token)

    const dispatch = useDispatch()
    const [openModal, setOpenModal] = useState(false)
    const [closeModal, setCloseModal] = useState(false)
    const [show, setShow] = useState(false)

    useEffect(()=>{
        // alert(openModal)
        dispatch(addressAction.getPrimaryAddress(token, 1))
    }, [dispatch, token])

    const addressState = useSelector(state=>state.address)

    const {data, isLoading} = addressState
    useEffect(()=>{
        if (isLoading) {
            dispatch(addressAction.getPrimaryAddress(token, 1))
        }
    }, [dispatch, token, isLoading])
    useEffect(()=>{
        if(data.length > 0){
            alert('true')
            setShow(true)
        }
    }, [data])
    
    const btnHandler = () => {
        setOpenModal(true)
        // alert(openModal)
    }
    const fullAddress = data.recipient_name + ', ' + data.city + ', ' + data.postal_code


    return (
        <div className="wrapperDetailUser d-flex mt-5">
            <div className="d-flex flex-column tableUser ml-5 position-absolute">

                <div className="title">
                    <span className="font-weight-bold">Choose another address</span>
                </div>

                <div className="subtitle">
                    <span className="text-secondary">Manage your shipping address</span>
                    <div className="line1 mt-4 mb-4"></div>
                </div>
                
                <div className='d-flex justify-content-center align-items-center'>
                    <Button onClick={btnHandler} className='mt-3 addressBtn btn-light'>
                        <span className="text-secondary h5 addressText" style={{textDecoration: 'none !important;'}}>Add new address</span>
                    </Button>
                </div>
                
            <div className='w-100 align-items-center d-flex justify-content-center'>
                <div className="d-flex flex-column mt-5 address"> 
                    <p className="recipientName font-weight-bold">{fullAddress}</p>
                    <span className="recipientAddress">{data.address_name}</span>
                    <div className='d-flex flex-start mt-2'>
                        <Button onClick={btnHandler}>
                            Change address
                        </Button>
                    </div>
                </div>
            </div>
            </div>
            <React.StrictMode>
                <AddressModal isOpen={openModal} isClose={() => setOpenModal(false)}/>
            </React.StrictMode>
        </div>
    )
}
