import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Navbar from '../component/Navbar'
import ProductCard from '../component/Card'
import Paginations from '../component/PaginationNewProduct';
import {Container, Row, Col, Button} from 'reactstrap'
import { useHistory } from 'react-router-dom'

import newProductAction from '../redux/actions/newproduct'

import getDetailProductIdAction from '../redux/actions/detailProduct'

import '../assets/css/ecommerce.css';

const NewProduct = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    
    const detailProductState = useSelector(state=>state.detailproduct)
    const {isTrue, detailId} = detailProductState
    
    const [id, setId] = useState(0)
    const [currentPage, setCurrentPage] = useState(1);

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
        dispatch(newProductAction.getNewProduct())
    }, [])


    useEffect(()=>{
        if (id) {
            dispatch(getDetailProductIdAction.getDetailProducts(id))
        }
    }, [id])


    const productState = useSelector(state=>state.newproduct)

    const {data, pageInfo} = productState

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
      <React.Fragment>
        <Navbar />
        <Container className='mt-5 vh-100'>
          <div className="category mt-5 mb-4">
              <h3 className="font-weight-bold">New Product</h3>
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
                paginate={paginate}
                currentPage={pageInfo.currentPage}
                pageInfo={pageInfo}
            />
          </div>
        </Container>
      </React.Fragment>
    )

}

export default  NewProduct