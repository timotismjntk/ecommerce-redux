import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Container, Row, Col, Label} from 'reactstrap'
import Navbar from '../component/Navbar'
import DetailProduct from '../component/DetailProduct'
import Newproduct from '../component/NewProduct'
import Review from '../component/Review'

export default function ProductDetail(props) {
    
    const productState = useSelector(state=>state.detailproduct)
    const {data} = productState
    return (
        <div>
            <Navbar />
            <Container>
            <DetailProduct />
            <div className="information container mt-4">
                <div className="info">
                    <h4 className="font-weight-bold">Informasi Produk</h4>
                </div>
                <div className="cond mt-4">
                    <h5 className="font-weight-bold">Condition</h5>
                </div>
                <div className="new">
                    <h5 className="font-weight-bold" style={{color: '#DB3022'}}>{data.condition_name}</h5>
                </div>
                <div className="desc mt-4">
                    <h5 className="font-weight-bold">Description</h5>
                </div>
                <div className="lorem text-muted">
                    <p className="description-item">{data.description}</p>
                </div>
            </div>
            <div className="container">
                <Review />
                <div class="category-desc mt-5">
                    <h2 class="font-weight-bold bt-5">You can also like this</h2>
                    <span class="detail">You’ve never seen it before!</span>
                </div>
            </div>
            <div className="mt-5">
                <Newproduct />
            </div>
            </Container>
        </div>
    )
}
