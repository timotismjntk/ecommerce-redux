import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Form, Label, Button, Input, FormGroup  } from 'reactstrap'
import addressAction from '../redux/actions/address'
export default function AddressModal(props) {
    const {
        isOpen,
        isClose
    } = props
    // useEffect(()=>{
    //     alert(open)
    // }, [open])
    let [modalOpen, setModalOpen] = useState(isOpen);
    let [place, setPlace] = useState('');
    let [recipient_name, setRecipientName] = useState('');
    let [recipient_number, setRecipientNumber] = useState('');
    let [address_name, setAddress] = useState('');
    let [postal_code, setPostalCode] = useState('');
    let [city, setCity] = useState('');
    let [isPrimary, setIsPrimary] = useState(0);
    const [backdrop, setBackdrop] = useState(true);

    const dispatch = useDispatch()
    const token = useSelector(state=>state.auth.token)

    useEffect(() => {
        if (isOpen === true){
            setModalOpen(isOpen)
        }
        // alert(isOpen)
    }, [isOpen, isClose]);

    const addAddress = (e) => {
        // alert(e)
            e.preventDefault()
            let data = {
            place,
            recipient_name,
            recipient_number,
            address_name,
            postal_code,
            city,
            isPrimary
            }
            dispatch(addressAction.createAddress(token, data))
    }
    const addressState = useSelector(state=>state.address)

    const {isSuccess, isLoading} = addressState

    useEffect(() => {
        if (isSuccess) {
            setModalOpen(isClose)
        }
    }, [isSuccess])

    const closeModal = () => {
        setModalOpen(isClose)
    }
    return (
        <React.Fragment >
            <Modal isOpen={modalOpen} backdrop={backdrop} className="modal-dialog modal-lg">
                <ModalHeader style={{borderBottom: 'none'}} toggle={closeModal}>
                </ModalHeader>
                <div className="d-flex align-items-center justify-content-center flex-center">
                    <h4 className="font-weight-bold">Add new address</h4>
                </div>
                <ModalBody>
                <Form onSubmit={addAddress} className='p-4'>
                    <FormGroup className="form-group input">
                        <Label className="text-secondary">Save address as (ex : home address, office address)</Label>
                        <Input onChange={(e)=>{setPlace(e.target.value)}} name='name' value={place} type='text' id='name' className='w-100' placeholder="Rumah" style={{height: '48px'}}  required/>
                    </FormGroup>

                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                            <Label for="Name" className="text-secondary">Recipient’s name</Label>
                            <Input onChange={(e)=>{setRecipientName(e.target.value)}} name='recipient_name' value={recipient_name} type='name' id='name' placeholder="" style={{height: '48px'}} required/>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                            <Label for="phone" className="text-secondary">Recipient's telephone number</Label>
                            <Input onChange={(e)=>{setRecipientNumber(e.target.value)}} name='recipient_number' value={recipient_number} type='phone' id='phone' placeholder="" style={{height: '48px'}} required/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                            <Label for="Address" className="text-secondary">Address</Label>
                            <Input onChange={(e)=>{setAddress(e.target.value)}} name='address_name' value={address_name} type='text' id='address' placeholder="" style={{height: '48px'}} required/>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                            <Label for="PostalCode" className="text-secondary">Postal code</Label>
                            <Input onChange={(e)=>{setPostalCode(e.target.value)}} name='postal_code' value={postal_code} type='text' id='postalcode' style={{height: '48px'}} placeholder="" />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row form>
                        <Col md={6}>
                            <FormGroup className="form-group input">
                                <Label className="text-secondary">City or Subdistrict</Label>
                                <Input onChange={(e)=>{setCity(e.target.value)}} name='city' value={city} type='name' id='storeName' placeholder="" style={{height: '48px'}} />
                            </FormGroup>
                        </Col>
                    </Row>

                    <FormGroup check inline>
                        <Label check className='text-secondary'>
                            <Input type="checkbox" onClick={() => isPrimary !== 1 ? setIsPrimary(1) : setIsPrimary(0)} /> Make it the primary address
                        </Label>
                    </FormGroup>
                    
                <div className="btnAddress ml-auto">
                    {/* <Button onClick={} className="d-flex ml-auto btn-light">Close</Button> */}
                    <Button onClick={()=>{setModalOpen(isClose)}} className="btn-secondary button rounded-pill w-25 btnAddress1 text-secondary" color={'light'}>
                        Cancel
                    </Button>
                    <Button type='submit' className='button rounded-pill w-25 btnAddress2' style={{backgroundColor: '#DB3022'}}>Save
                    </Button>
                </div>
                </Form>
                </ModalBody>
            </Modal>
        </React.Fragment>
    )
}
