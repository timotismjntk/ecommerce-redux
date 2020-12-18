import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Form, Label, Button, Input, FormGroup  } from 'reactstrap'
import addressAction from '../redux/actions/address'
import ModalResponse from './ModalResponse'

export default function AddressModal(props) {
    const {
        open,
        close
    } = props
    
    let [modalOpen, setModalOpen] = useState(open);
    const [modalMessage, setModalMessage] = useState(false);
    const [backdrop, setBackdrop] = useState(true);
    const dispatch = useDispatch()
    const token = useSelector(state=>state.auth.token)
    const addressState =  useSelector(state=>state.address)

    const {address, isLoading, alertMsg, isError, isSuccess} = addressState


    useEffect(() => {
        if (open === true){
            setModalOpen(open)
        }
        // alert(isOpen)
    }, [open, close]);

    const closeModal = () => {
        setModalOpen(close)
    }

    const chooseAddress = async(id) => {
        if (id) {
            await dispatch(addressAction.chooseAddressPrimary(token, id))
        }
    }

    useEffect(()=> {
        if (isSuccess) {
            setModalMessage(true)
            setTimeout(() => {
                dispatch(addressAction.getAddress(token))
                closeModal()
                dispatch(addressAction.clearMessage())
            }, 2000)
        }
    }, [isSuccess])

    useEffect(() => {
        if (isError) {
            setModalMessage(true)
            setTimeout(() => {
                closeModal()
                dispatch(addressAction.clearMessage())
            }, 500)
        }
    }, [isError])

    return (
        <React.Fragment >
            <Modal isOpen={open} toggle={closeModal} backdrop={backdrop} className="modal-dialog">
                <ModalHeader toggle={closeModal}>
                    <h5>Select your primary address</h5>
                </ModalHeader>
                <ModalBody>
                    <Row>
                        <Col md="12">
                            {Object.keys(address) && address.length && address.map((items)=>{
                                if (items.isPrimary === 1) {
                                    return(
                                        <Button outline color="danger" className="d-flex mb-3" onClick={() => chooseAddress(items.id)} style={{width: '100%', flexDirection: 'column'}}>
                                            <p style={{color: 'black'}} className="recipientName font-weight-bold">{items.recipient_name}</p>
                                            <span style={{color: '#222222'}} className="recipientAddress">{items.address_name + ', ' + items.city + ', ' + items.postal_code}</span>
                                        </Button>
                                    )
                                } else {
                                    return(
                                        <Button outline className="d-flex mb-3" onClick={() => chooseAddress(items.id)} style={{width: '100%', flexDirection: 'column'}}>
                                            <p style={{color: 'black'}} className="recipientName font-weight-bold">{items.recipient_name}</p>
                                            <span style={{color: '#222222'}} className="recipientAddress">{items.address_name + ', ' + items.city + ', ' + items.postal_code}</span>
                                        </Button>
                                    )
                                }
                            })}
                        </Col>
                    </Row>
                    {/* </Row> */}
                </ModalBody>
            </Modal>
            <ModalResponse open={modalMessage} close={()=>{setModalMessage(false)}} message={alertMsg}/>
        </React.Fragment>
    )
}
