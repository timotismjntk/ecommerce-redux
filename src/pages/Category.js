import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Navbar from '../component/Navbar'
import ProductCard from '../component/Card'
import {Container, Row, Col, Button} from 'reactstrap'
import { useHistory } from 'react-router-dom'

import categoryProductAction from '../redux/actions/categoryProduct'

import getDetailProductIdAction from '../redux/actions/detailProduct'

import '../assets/css/ecommerce.css';

const ShowByCategory = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    
    const [id, setId] = useState(0)
    const [searchQuery, setSearchQuery] = useState('')

    const { location: {search} } = props;
    
    const detailProductState = useSelector(state=>state.detailproduct)
    const {isTrue, detailId} = detailProductState
    
    useEffect(() => {
        window.scrollTo({
            top: 0
        });
    }, []);

    useEffect(() => {
        setSearchQuery(search.slice(6, search.lenght))
    }, [])

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
        if (searchQuery) {
            dispatch(categoryProductAction.getProductByCategory(searchQuery))
        }
    }, [searchQuery])

    useEffect(()=>{
        dispatch(getDetailProductIdAction.getDetailProducts(id))
    }, [id, dispatch])


    const productState = useSelector(state=>state.categoryproduct)

    const {result} = productState

    return (
      <React.Fragment>
        <Navbar />
        <Container className='mt-5 vh-100'>
          <div className="category mt-5 mb-4">
              <h3 className="font-weight-bold">Category {searchQuery}</h3>
          </div>
          <Row>
                {Object.keys(result) && result.length ? result.map((items, index) => {
                    return(
                        <Col xs={6} sm={4} md={3} className='mb-5' key={index.toString()} onClick={()=>{setId(items.id)}}>
                            <ProductCard name={items.name} price={items.price} rating={items.total_rating} url={items.url}/>
                        </Col>
                    )
                }) : <h4>Product not found</h4>}
          </Row> 
        </Container>
      </React.Fragment>
    )

}

export default  ShowByCategory