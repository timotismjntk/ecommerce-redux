import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Navbar from '../component/Navbar'
import ProductCard from '../component/Card'
import {Container, Row, Col, Button} from 'reactstrap'
import { useHistory } from 'react-router-dom'
import Paginations from '../component/PaginationPopularProduct';

import popularProductAction from '../redux/actions/popular'

import getDetailProductIdAction from '../redux/actions/detailProduct'

import '../assets/css/ecommerce.css';

const PopularProduct = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    
    const detailProductState = useSelector(state=>state.detailproduct)
    const {isTrue, detailId} = detailProductState
    
    const [id, setId] = useState(0)

    useEffect(() => {
        window.scrollTo({
            top: 0
        });
    }, []);
    
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
            dispatch(popularProductAction.getPopularProduct())
        }, [])
    
    
        useEffect(()=>{
            dispatch(getDetailProductIdAction.getDetailProducts(id))
        }, [id])
    
    
        const productState = useSelector(state=>state.popularproduct)
    
        const {data, pageInfo} = productState

    return (
      <React.Fragment>
        <Navbar />
        <Container className='mt-5 vh-100'>
          <div className="category mt-5 mb-4">
              <h3 className="font-weight-bold">Popular Product</h3>
          </div>
          <Row>
                {Object.keys(data) && data.length && data.map((items, index) => {
                    return(
                        <Col xs={6} sm={4} md={3} className='mb-5' onClick={()=>{setId(items.id)}}>
                            <ProductCard name={items.name} price={items.price} rating={items.total_rating} url={items.url}/>
                        </Col>
                    )
                })}
          </Row> 
          <div className="d-flex justify-content-center mt-5">
            <Paginations
                postsPerPage={pageInfo.limitPerPage}
                totalPosts={pageInfo.count}
                currentPage={pageInfo.currentPage}
                pageInfo={pageInfo}
            />
          </div>
        </Container>
      </React.Fragment>
    )

}

export default PopularProduct