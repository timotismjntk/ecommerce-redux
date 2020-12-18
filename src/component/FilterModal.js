import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Form, Label, Button, Input, FormGroup  } from 'reactstrap'
import { useHistory } from 'react-router-dom'

import ProductCategoryAction from '../redux/actions/categoryProduct'
import search from '../redux/actions/search'

export default function FilterModal(props) {
    const {
        open,
        close
    } = props
    
    let [modalOpen, setModalOpen] = useState(open);
    const [backdrop, setBackdrop] = useState(true);
    const dispatch = useDispatch()
    const history = useHistory()
    const [selectedId, setSelectedId] = useState(null);
    const [xs, setXs] = useState(false);
    const [s, setS] = useState(false);
    const [m, setM] = useState(false);
    const [l, setL] = useState(false);
    const [xl, setXl] = useState(false);
    const [category, setCategory] = useState('')

    useEffect(() => {
        if (open === true){
            setModalOpen(open)
        }
        // alert(isOpen)
    }, [open, close]);
    
    const closeModal = () => {
        setModalOpen(close)
    }

    useEffect(()=>{
        dispatch(ProductCategoryAction.getCatProduct())
    }, [])

    const gotoCategoryDetail = () => {
        if (category) {
            history.push(`/product/category?name=${category}`)
            close()
        } else {
            history.push('/')
            close()
        }
    }
    
    const productState = useSelector(state=>state.categoryproduct)

    const {data} = productState

    const colorArray = [
        {
          id: 1,
          hex: '#000000',
        },
        {
          id: 2,
          hex: '#F6F6F6',
        },
        {
          id: 3,
          hex: '#B82222',
        },
        {
          id: 4,
          hex: '#BEA9A9',
        },
        {
          id: 5,
          hex: '#E2BB8D',
        },
        {
          id: 6,
          hex: '#151867',
        },
      ];

    return (
        <React.Fragment >
            <Modal isOpen={open} toggle={closeModal} backdrop={backdrop} className="modal-dialog">
                <ModalHeader toggle={closeModal}>
                    <h5>Filter</h5>
                </ModalHeader>
                <ModalBody>
                    <Row>
                        <Col md="12">
                            <h4 style={{color: 'black', fontWeight: 'bold'}}>Colors</h4>
                            <div style={{flex: 1, justifyContent: 'space-between', marginVertical: 15, backgroundColor: 'white', paddingVertical: 25, paddingHorizontal: 10}}>
                                {colorArray.map((el, index)=> {
                                return (
                                    <Button style={
                                        el.id === selectedId
                                          ? {
                                            marginLeft: 9,
                                            marginRight: 7,
                                            borderWidth: 1.5,
                                            borderRadius: 30,
                                            borderColor: '#DB3022',
                                            // width: 38,
                                            // height: 38,
                                            marginTop: 4,
                                            padding: 3,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: 'white',
                                            borderWidth: 1,
                                            }
                                          : {borderWidth: 0, backgroundColor: 'white', marginRight: 0, marginTop: 4, marginLeft: 0}
                                      } onClick={() => { setSelectedId(el.id) }}>
                                        <div style={{width: 45, height: 45, borderRadius: 30, backgroundColor: 'red', backgroundColor: el.hex}} />
                                    </Button>
                                )
                                })}
                            </div>
                        </Col>
                        <div style={{flex: 1, backgroundColor: '#F4F4F4', padding: 1.5}} className="mt-4 mb-4" />
                        <Col md="12">
                            <h4 className="mb-4" style={{color: 'black', fontWeight: 'bold'}}>Sizes</h4>
                            {!xs ? (
                                <Button style={{
                                    borderWidth: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 10,
                                    backgroundColor: 'white',
                                    borderColor: '#E5E5E5',
                                    padding: 7,
                                    height: 45,
                                    width: 45,
                                    marginRight: 15,
                                    marginLeft: 15
                                }}
                                onClick={() => setXs(!xs)}>
                                    <h5 style={{color: 'black'}}>XS</h5>
                                </Button>
                            ) : (
                                <Button style={{padding: 7, marginRight: 15, height: 45, width: 45, borderWidth: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: '#DB3022'}}
                                onClick={() => setXs(!xs)}>
                                    <h5>XS</h5>
                                </Button>
                            )}
                            {!s ? (
                                <Button style={{
                                    borderWidth: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 10,
                                    backgroundColor: 'white',
                                    borderColor: '#E5E5E5',
                                    padding: 7,
                                    height: 45,
                                    width: 45,
                                    marginRight: 15
                                    }}
                                onClick={() => setS(!s)}>
                                    <h5 style={{color: 'black'}}>S</h5>
                                </Button>
                            ) : (
                                <Button style={{padding: 7, marginRight: 15, height: 45, width: 45, borderWidth: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: '#DB3022'}}
                                onClick={() => setS(!s)}>
                                    <h5>S</h5>
                                </Button>
                            )}
                            {!m ? (
                                <Button style={{
                                    borderWidth: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 10,
                                    backgroundColor: 'white',
                                    borderColor: '#E5E5E5',
                                    padding: 7,
                                    height: 45,
                                    width: 45,
                                    marginRight: 15
                                    }}
                                onClick={() => setM(!m)}>
                                    <h5 style={{color: 'black'}}>M</h5>
                                </Button>
                            ) : (
                                <Button style={{padding: 7, marginRight: 15, height: 45, width: 45, borderWidth: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: '#DB3022'}}
                                onClick={() => setM(!m)}>
                                    <h5>M</h5>
                                </Button>
                            )}
                            {!l ? (
                                <Button style={{
                                    borderWidth: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 10,
                                    backgroundColor: 'white',
                                    borderColor: '#E5E5E5',
                                    padding: 7,
                                    height: 45,
                                    width: 45,
                                    marginRight: 15
                                    }}
                                onClick={() => setL(!l)}>
                                    <h5 style={{color: 'black'}}>L</h5>
                                </Button>
                            ) : (
                                <Button  style={{padding: 7, marginRight: 15, height: 45, width: 45, borderWidth: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: '#DB3022'}}
                                onClick={() => setL(!l)}>
                                    <h5>L</h5>
                                </Button>
                            )}
                            {!xl ? (
                                <Button style={{
                                    borderWidth: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 10,
                                    backgroundColor: 'white',
                                    borderColor: '#E5E5E5',
                                    padding: 7,
                                    height: 45,
                                    width: 45,
                                    marginRight: 15
                                    }}
                                onClick={() => setXl(!xl)}>
                                    <h5 style={{color: 'black'}}>XL</h5>
                                </Button>
                            ) : (
                                <Button  style={{padding: 7, marginRight: 15, height: 45, width: 45, borderWidth: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: '#DB3022'}}
                                onClick={() => setXl(!xl)}>
                                    <h5>XL</h5>
                                </Button>
                            )}
                        </Col>
                        <div style={{flex: 1, backgroundColor: '#F4F4F4', padding: 1.5}} className="mt-4 mb-4" />
                        <Col md="12">
                            <h4 className="mb-4" style={{color: 'black', fontWeight: 'bold'}}>Category</h4>
                            {Object.keys(data) && data.length && data.map((items, index) => {
                                if (index < 5) {
                                    return (
                                        <Button
                                            style={ items.category_name !== category ? {
                                                borderWidth: 1,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius: 10,
                                                backgroundColor: 'white',
                                                borderColor: '#E5E5E5',
                                                padding: 7,
                                                height: 45,
                                                // width: 90,
                                                marginBottom: 10,
                                                // marginRight: 15,
                                                marginLeft: 15
                                            } : { borderWidth: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: 'white', borderColor: '#E5E5E5', padding: 7, height: 45, marginBottom: 10, marginLeft: 15, backgroundColor: '#DB3022'}}
                                            onClick={() => setCategory(items.category_name)}>
                                            <h5 style={items.category_name === category ? {color: 'white'} : {color: 'black'}}>
                                                {items.category_name}
                                            </h5>
                                        </Button>
                                    )
                                }
                            })}     
                        </Col>
                        <div style={{flex: 1, backgroundColor: '#F4F4F4', padding: 1.5}} className="mt-4 mb-4" />
                        <Col md="12">
                            <div>
                                <h4 style={{fontWeight: 'bold'}}>Brand</h4>
                                <p style={{color: '#9B9B9B'}}>
                                adidas Originals, Jack & Jones, s.Oliver
                                </p>
                            </div>
                        </Col>
                        <div style={{flex: 1, backgroundColor: '#F4F4F4', padding: 1.5}} className="mt-4 mb-4" />
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <div className="d-flex" style={{alignItems: 'center', marginRight: 75, justifyContent: 'center'}}>
                        <Button onClick={close} outline style={{width: 160, marginRight: 10, borderRadius: 30}}>Discard</Button>
                        <Button onClick={gotoCategoryDetail} style={{width: 160, borderRadius: 30, backgroundColor: '#DB3022', color: 'white'}}>Apply</Button>
                    </div>
                </ModalFooter>
            </Modal>
        </React.Fragment>
    )
}
