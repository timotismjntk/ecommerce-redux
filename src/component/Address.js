import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Button} from 'reactstrap'

import '../assets/css/address.css';
import addressAction from '../redux/actions/address'

import AddressModal from './AddAddressModal.js'
import ChangeAddress from './ChangeAddressModal'

export default function Address(props) {
    const user = useSelector(state=>state.profile)
    const token = useSelector(state=>state.auth.token)

    const dispatch = useDispatch()
    const [openModal, setOpenModal] = useState(false)
    const [openChangeModal, setOpenChangeModal] = useState(false)
    const [show, setShow] = useState(false)
    const [data, setData] = useState([])
    useEffect(()=>{
        dispatch(addressAction.getAddress(token))
    }, [])

    const addressState = useSelector(state=>state.address)

    const {address, isLoading} = addressState
    useEffect(()=>{
        if(address.length > 0){
            setData(address[0])
            setShow(true)
        }
    }, [address])
    
    const btnHandler = () => {
        setOpenModal(true)
        // alert(openModal)
    }
    const fullAddress = data.place + ', '  + data.address_name + ', ' + data.city + ', ' + data.postal_code


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
                
            {data && (
                <div>
                    <div className='w-100 align-items-center d-flex justify-content-center' style={show ? {display: 'none'} : {display : 'none'}}>
                    <div className="d-flex flex-column mt-5 address"> 
                        <p className="recipientName font-weight-bold">{data.recipient_name}</p>
                        <span className="recipientAddress">{fullAddress}</span>
                            <div className='d-flex flex-start mt-2'>
                                <Button onClick={() => {setOpenChangeModal(true)}}>
                                    Change address
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            </div>
            <React.StrictMode>
                <AddressModal isOpen={openModal} isClose={() => setOpenModal(false)}/>
                <ChangeAddress open={openChangeModal} close={() => setOpenChangeModal(false)}/>
            </React.StrictMode>
        </div>
    )
}
