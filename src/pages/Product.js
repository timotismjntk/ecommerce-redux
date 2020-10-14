import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Container, Row, Col, Label} from 'reactstrap'
import Navbar from '../component/Navbar'
import DetailProduct from '../component/DetailProduct'
import Newproduct from '../component/NewProduct'

import star from '../assets/images/Star.svg'

export default function Product(props) {
    
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
                            <p className="description-item">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                                <br/>Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum <br/> primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum.<br/>
                                Donec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.<br/>
                                
                                <br/><br/>Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.

                                {' '}{' '}In ultricies rutrum tempus. Mauris vel molestie orci. 
                            </p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="review-stats row mt-5 mb-5">
                            <div className="col-5">
                                <div className="row">
                                    <div className="col-12">
                                        <h3>Product Review</h3>
                                    </div>
                                    <div className="col-3 d-flex justify-content-center align-items-center">
                                    <div className="row no-gutters">
                                        <div className="col-12">
                                            <span className="display-4 rata-rata">5.0</span><span className="text-secondary">/10</span>
                                        </div>
                                        <div className="col-12">
                                            <div className="row no-gutters">
                                                <div className="col">
                                                    <img src={star} alt="star" />
                                                </div>
                                                <div className="col">
                                                    <img src={star} alt="star" />
                                                </div>
                                                <div className="col">
                                                    <img src={star} alt="star" />
                                                </div>
                                                <div className="col">
                                                    <img src={star} alt="star" />
                                                </div>
                                                <div className="col">
                                                    <img src={star} alt="star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-9">
                                    <div className="row no-gutters my-1 rating-bar d-flex justify-content-center align-items-center">
                                        <div className="col-1 d-flex justify-content-center align-items-center">
                                            <img src={star} alt="star" />
                                        </div>
                                        <div className="col-1 d-flex justify-content-center align-items-center">
                                            <span className="text-secondary">5</span>
                                        </div>
                                        <div className="col d-flex justify-content-start align-items-center">
                                            <div className="bg-danger rounded-pill mx-2 progress-bar">
                                            </div>
                                        </div>
                                        <div className="col-1 d-flex justify-content-center align-items-center">
                                            <span className="text-secondary">4</span>
                                        </div>
                                    </div>
                                    <div className="row no-gutters my-1 rating-bar d-flex justify-content-center align-items-center">
                                        <div className="col-1 d-flex justify-content-center align-items-center">
                                            <img src={star} alt="star" />
                                        </div>
                                        <div className="col-1 d-flex justify-content-center align-items-center">
                                            <span className="text-secondary">4</span>
                                        </div>
                                        <div className="col d-flex justify-content-start align-items-center">
                                            <div className="bg-danger rounded-pill mx-2 progress-bar2">
                                            </div>
                                        </div>
                                        <div className="col-1 d-flex justify-content-center align-items-center">
                                            <span className="text-secondary">0</span>
                                        </div>
                                    </div>
                                    <div className="row no-gutters my-1 rating-bar d-flex justify-content-center align-items-center">
                                        <div className="col-1 d-flex justify-content-center align-items-center">
                                            <img src={star} alt="star" />
                                        </div>
                                        <div className="col-1 d-flex justify-content-center align-items-center">
                                            <span className="text-secondary">3</span>
                                        </div>
                                        <div className="col d-flex justify-content-start align-items-center">
                                            <div className="bg-danger rounded-pill mx-2 progress-bar3">
                                            </div>
                                        </div>
                                        <div className="col-1 d-flex justify-content-center align-items-center">
                                            <span className="text-secondary">0</span>
                                        </div>
                                    </div>
                                    <div className="row no-gutters my-1 rating-bar d-flex justify-content-center align-items-center">
                                        <div className="col-1 d-flex justify-content-center align-items-center">
                                            <img src={star} alt="star" />
                                        </div>
                                        <div className="col-1 d-flex justify-content-center align-items-center">
                                            <span className="text-secondary">2</span>
                                        </div>
                                        <div className="col d-flex justify-content-start align-items-center">
                                            <div className="bg-danger rounded-pill mx-2 progress-bar4">
                                            </div>
                                        </div>
                                        <div className="col-1 d-flex justify-content-center align-items-center">
                                            <span className="text-secondary">0</span>
                                        </div>
                                    </div>
                                    <div className="row no-gutters my-1 rating-bar d-flex justify-content-center align-items-center">
                                        <div className="col-1 d-flex justify-content-center align-items-center4">
                                            <img src={star} alt="star" />
                                        </div>
                                        <div className="col-1 d-flex justify-content-center align-items-center">
                                            <span className="text-secondary">1</span>
                                        </div>
                                        <div className="col d-flex justify-content-start align-items-center">
                                            <div className="bg-danger rounded-pill mx-2 progress-bar5">
                                            </div>
                                        </div>
                                        <div className="col-1 d-flex justify-content-center align-items-center">
                                            <span className="text-secondary">0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-100 mt-5" style={{borderBottom: '1px solid #D4D4D4'}}></div>
                    </div>
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
