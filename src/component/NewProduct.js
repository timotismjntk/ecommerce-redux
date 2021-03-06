import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import ProductCard from '../component/Card'

import {Container, Row, Col, Button} from 'reactstrap'
import { useHistory } from 'react-router-dom'

import newProductAction from '../redux/actions/newproduct'

import getDetailProductIdAction from '../redux/actions/detailProduct'

import '../assets/css/product.css';

export default function NewProduct(props) {
    const dispatch = useDispatch()
    const history = useHistory()
    
    const detailProductState = useSelector(state=>state.detailproduct)
    const {isTrue, detailId} = detailProductState
    
    const [id, setId] = useState(0)
    
    useEffect(()=>{
        // alert(id)
        if (isTrue && id) {
            window.scrollTo({
            top: 0
            });
            history.push(`/product/detail?productId=${id}`)
        }
    }, [isTrue, history, id])

    
    useEffect(()=>{
        dispatch(newProductAction.getNewProduct())
    }, [])


    useEffect(()=>{
        dispatch(getDetailProductIdAction.getDetailProducts(id))
    }, [id])

    const expand = () => {
        history.push('/product/new')
    }


    const productState = useSelector(state=>state.newproduct)

    const {data} = productState
    // console.log(data)
    return (
        <Container fluid>
            <Row className='newProduct'>
                {Object.keys(data) && data.length && data.map((items, index) => {
                    return(
                        <Col xs={6} sm={4} md={3} className='mb-5' onClick={()=>{setId(items.id)}}>
                            <ProductCard name={items.name} price={items.price} rating={items.total_rating} url={items.url}/>
                        </Col>
                    )
                })}
                <div>
                    <Button color='link' onClick={expand}>
                        <img src={require('../assets/images/right.png')} alt="right" />
                    </Button>
                    <h5>See more</h5>
                </div>
            </Row>
        </Container>
    )
}
