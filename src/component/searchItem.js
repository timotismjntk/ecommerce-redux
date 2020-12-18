import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import ProductCard from '../component/Card'

import {Container, Row, Col} from 'reactstrap'
import { useHistory } from 'react-router-dom'

import getDetailProductIdAction from '../redux/actions/detailProduct'

import popularProductAction from '../redux/actions/popular'

export default function SearchResults(props) {
    
    const dispatch = useDispatch()
    const history = useHistory()
    
    const searchingresults = useSelector(state=>state.search)
    const {results} = searchingresults

    const [id, setId] = useState(0)

        useEffect(()=>{
            // alert(id)
            if (id) {
                history.push(`/product/detail?productId=${id}`)
            }
        }, [history, id])
    
        useEffect(()=>{
            dispatch(popularProductAction.getPopularProduct())
        }, [])
    
    
        useEffect(()=>{
           if (id) {
            dispatch(getDetailProductIdAction.getDetailProducts(id))
           }
        }, [id])
    
    // search process is in component navbar
    // search process is in component navbar
        
    return (
        <Container fluid>
            <Row>
                {results.length > 0 ? Object.keys(results) && results.length && results.map((items, index) => {
                    return(
                        <Col xs={6} sm={4} md={3} className='mb-5' onClick={()=>{setId(items.id)}}>
                            <ProductCard name={items.name} price={items.price} rating={items.total_rating} url={items.url}/>
                        </Col>
                    )
                }) : <h5>Nothing Found...</h5>}
            </Row>
        </Container>
    )
}
