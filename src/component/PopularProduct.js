import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import ProductCard from '../component/Card'

import {Container, Row, Col} from 'reactstrap'
import { useHistory } from 'react-router-dom'

import getDetailProductIdAction from '../redux/actions/detailProduct'

import popularProductAction from '../redux/actions/popular'

export default function PopularProduct(props) {
    
    const dispatch = useDispatch()
    const history = useHistory()
    
    const detailProductState = useSelector(state=>state.detailproduct)
    const {isTrue, detailId} = detailProductState

    const [id, setId] = useState(0)

    // useEffect(()=>{
        useEffect(()=>{
            // alert(id)
            if (isTrue && id) {
                history.push(`/product/detail?productId=${id}`)
            }
        }, [isTrue, history, id])
    
        
        useEffect(()=>{
            dispatch(popularProductAction.getPopularProduct())
        }, [dispatch])
    
    
        useEffect(()=>{
            dispatch(getDetailProductIdAction.getDetailProducts(id))
        }, [id, dispatch])
    
    
        const productState = useSelector(state=>state.popularproduct)
    
        const {data} = productState
    // console.log(data)
    return (
        <Container fluid>
            <Row>
                {Object.keys(data) && data.length && data.map((items, index) => {
                    return(
                        <Col xs={6} sm={4} md={3} className='mb-5' onClick={()=>{setId(items.id)}}>
                            <ProductCard name={items.name} price={items.price} rating={items.total_rating} url={items.url}/>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}
