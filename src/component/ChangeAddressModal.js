import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Form, Label, Button, Input, FormGroup  } from 'reactstrap'
import addressAction from '../redux/actions/address'

export default function AddressModal(props) {
    const {
        open,
        close
    } = props
    
    let [modalOpen, setModalOpen] = useState(open);

    const dispatch = useDispatch()
    const token = useSelector(state=>state.auth.token)
    useEffect(()=>{
        dispatch(addressAction.getAddress(token))
    }, [dispatch, token])
    const addressState =  useSelector(state=>state.address)

    const {address, isLoading} = addressState


    useEffect(() => {
        if (open === true){
            setModalOpen(open)
        }
        // alert(isOpen)
    }, [open, close]);

    // const fullAddress = address.recipient_name + ', ' + address.city + ', ' + address.postal_code
    

    return (
        <React.Fragment >
            <Modal isOpen={modalOpen} className="modal-dialog modal-lg">
                <ModalHeader style={{borderBottom: 'none'}}>
                </ModalHeader>
                <ModalBody>
                <div className='w-100 align-items-center d-flex justify-content-center'>
                    {Object.keys(address) && address.length && address.map((items)=>{
                        return(
                            <div className="d-flex flex-column mt-5 address"> 
                                {/* <p className="recipientName font-weight-bold">{fullAddress}</p> */}
                                <span className="recipientAddress">{items.address_name}</span>
                                <div className='d-flex flex-start mt-2'>
                                </div>
                            </div>
                        )
                    })}
                </div>
                </ModalBody>
            </Modal>
        </React.Fragment>
    )
}
