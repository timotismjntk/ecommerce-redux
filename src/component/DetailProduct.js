import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Container, CustomInput, Input , Row, Col, Label, Button} from 'reactstrap'
import { useHistory } from 'react-router-dom'

import Rating from '../component/Rating'

import '../assets/css/card.css';
import '../assets/css/product.css';

import MinusBtn from '../assets/images/kurang.svg'
import AddBtn from '../assets/images/tambah.svg'

import cartAction from '../redux/actions/cart'
import ModalResponse from './ModalResponse'


export default function DetailProduct(props) {
    
    const {REACT_APP_BACKEND_URL} = process.env

    const dispatch = useDispatch()
    const history = useHistory()

    const {token, isLogin} = useSelector(state=>state.auth)
    const quantityState = useSelector(state=>state.cart)
    const {quantity, isAdded, isError} = quantityState

    const productState = useSelector(state=>state.detailproduct)
    const {data, price} = productState

    const [id, setId] = useState(data.id)
    const [modalOpen, setModalOpen] = useState(false)
    const [color, setColor] = useState(false)

    // const backToTop = () => {
        
    //   }
    
    useEffect(() => {
        window.scrollTo(0, 200);
    }, []);

    const makeCart = (e) => {
        e.preventDefault()
        // alert(quantity)
        let data = {
        product_id: id,
        quantity
        }
        if(isLogin){
            dispatch(cartAction.getCart(token))
            setTimeout(() =>{
                dispatch(cartAction.createCart(token, data))
                setModalOpen(true)
            }, 100)
        }
        else {
            history.push('/login')
        }
    }
    useEffect(()=>{
        if (!data.url) {
            setTimeout(()=>{
                history.push('/')
            }, 300)
        }
    }, [data])
    useEffect(()=>{
        if(isAdded){
            dispatch(cartAction.getCart(token))
        }
    }, [isAdded])
    const increaseAmountProductCart = () => {
        dispatch(cartAction.increaseQuantityBeforeAddCart())
    }
    const decreaseAmountProductCart = () => {
        dispatch(cartAction.decreaseQuantityBeforeAddCart())
    }
    // console.log(data)
    return (
        <Container>
            <div className='mt-5'>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={6}>
                        <Row>
                            <Col lg={6} className='mb-3'>
                                <div style={{ width: '250px', height: '320px', borderRadius: '8px'}}>
                                    <img src={REACT_APP_BACKEND_URL + data.url} style={{width: '250px', height: '320px', objectFit: 'contain'}} alt='detail'/>
                                </div>
                            </Col>
                            <Col lg={6} className='mb-3'>
                                <div style={{ width: '250px', height: '320px', borderRadius: '8px'}}>
                                    <img src={REACT_APP_BACKEND_URL + data.url} style={{width: '250px', height: '320px', objectFit: 'contain'}} alt='detail'/>
                                </div>
                            </Col>
                            <Col lg={6} className='mb-3'>
                                <div style={{ width: '250px', height: '320px', borderRadius: '8px'}}>
                                    <img src={REACT_APP_BACKEND_URL + data.url} style={{width: '250px', height: '320px', objectFit: 'contain'}} alt='detail'/>
                                </div>
                            </Col>
                            <Col lg={6} className='mb-3'>
                                <div style={{ width: '250px', height: '320px', borderRadius: '8px'}}>
                                    <img src={REACT_APP_BACKEND_URL + data.url} style={{width: '250px', height: '320px', objectFit: 'contain'}} alt='detail'/>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6}>
                        <div>
                            <h5 className='font-weight-bold' style={{fontSize: '28px', fontWeight: '500'}}>{data.name}</h5>
                            <span className='text-secondary' style={{fontSize: '16px', fontWeight: '500'}}>{data.store_name ? data.store_name: 'Zalora'}</span>
                            <div className='d-flex flex-row align-items-center'>
                                <Rating number={data.total_rating}/>
                                <span className='mt-1 ml-2 text-secondary'>({data.total_rating})</span>
                            </div>
                            <Label className='text-secondary mt-4' style={{fontSize: '16px'}}>Price</Label>
                            <h5 style={{fontSize: '27px', fontWeight: 'bold'}}>Rp. {price}</h5>
                        </div>
                        <div>
                        </div>
                        
                        <div>
                            <Label className='font-weight-bold mt-4' style={{fontSize: '16px'}}>Color</Label>
                            <Col lg={4} className="d-flex flex-Row" style={{justifyContent: 'space-between'}}>
                                {color === 'black' ? (
                                    <div style={{backgroundColor: '#DB3022', padding: 1, borderRadius: 30}}>
                                        <Button style={{borderWidth: 3, borderColor: 'white', backgroundColor: 'black', padding: 12, borderRadius: 30}} />
                                    </div>
                                ) : (
                                    <div>
                                        <Button style={{backgroundColor: 'black', padding: 15, borderRadius: 30}} onClick={() => setColor('black')} />
                                    </div>
                                )}
                                {color === '#D84242' ? (
                                    <div style={{backgroundColor: '#DB3022', padding: 1, borderRadius: 30}}>
                                        <Button style={{borderWidth: 3, borderColor: 'white', backgroundColor: '#D84242', padding: 12, borderRadius: 30}} />
                                    </div>
                                ) : (
                                    <div>
                                        <Button style={{backgroundColor: '#D84242', padding: 15, borderRadius: 30}} onClick={() => setColor('#D84242')} />
                                    </div>
                                )}
                                {color === '#4290D8' ? (
                                    <div style={{backgroundColor: '#DB3022', padding: 1, borderRadius: 30}}>
                                        <Button style={{borderWidth: 3, borderColor: 'white', backgroundColor: '#4290D8', padding: 12, borderRadius: 30}} />
                                    </div>
                                ) : (
                                    <div>
                                        <Button style={{backgroundColor: '#4290D8', padding: 15, borderRadius: 30}} onClick={() => setColor('#4290D8')} />
                                    </div>
                                )}
                                {color === '#42D86C' ? (
                                    <div style={{backgroundColor: '#DB3022', padding: 1, borderRadius: 30}}>
                                        <Button style={{borderWidth: 3, borderColor: 'white', backgroundColor: '#42D86C', padding: 12, borderRadius: 30}} />
                                    </div>
                                ) : (
                                    <div>
                                        <Button style={{backgroundColor: '#42D86C', padding: 15, borderRadius: 30}} onClick={() => setColor('#42D86C')} />
                                    </div>
                                )}
                            </Col>
                        </div>

                        <div className="title mt-4 d-flex row">
                            <div className="col-12">
                                <div className="row">
                                    <div className="total-product col-4">
                                        <p className="font-weight-bold">Size</p>
                                        <div className="btn-jumlah d-flex flex-row justify-content-between align-items-center">
                                            <Button className="btn btn-light btn-kurang rounded-circle" name="button"><img className="kurang" src={MinusBtn} alt='btn-nav'/></Button>
                                            <p className="mt-3">28</p>
                                            <Button outline color='secondary' className="btn btn-tambah rounded-circle"><img className="tambah" src={AddBtn} alt='btn-nav'/></Button>
                                        </div>
                                    </div>

                                    <div className="total-product col-4">
                                        <p className="font-weight-bold">Jumlah</p>
                                        <div className="btn-jumlah d-flex flex-row justify-content-between align-items-center">
                                            <Button onClick={decreaseAmountProductCart} className="btn btn-light btn-kurang rounded-circle" name="button"><img className="kurang" src={MinusBtn} alt='btn-nav'/></Button>
                                            <p className="mt-3">{quantity}</p>
                                            <Button  onClick={increaseAmountProductCart} outline color='secondary' className="btn btn-tambah rounded-circle"><img className="tambah" src={AddBtn} alt='btn-nav'/></Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Row className='mt-4'>
                            <Col md={6} sm={6} xs={6} lg={4}>
                                <Button outline color="secondary" style={{height: '48px', width: '160px', borderRadius: '24px', color: '#000000'}}>
                                    Chat
                                </Button>
                            </Col>
                            <Col md={6} sm={6} xs={6} lg={4}>
                                <Button onClick={makeCart} outline color="secondary" style={{backgroundColor: '#DB3022', color: '#ffffff', height: '48px', width: '160px', borderRadius: '24px'}}>
                                    Add Bag
                                </Button>
                            </Col>
                            {/* <Col md={6} sm={6} xs={6} lg={6} className='mt-4'>
                                <Button outline color="secondary" style={{height: '48px', width: '343px', borderRadius: '24px', backgroundColor: '#DB3022', color: '#ffffff'}}>
                                    Buy Now
                                </Button>
                            </Col> */}
                        </Row>
                    </Col>
                </Row>
            </div>
            <ModalResponse open={modalOpen} close={()=>{setModalOpen(false)}} message={'Success Added to cart'}/>
        </Container>
    )
}
