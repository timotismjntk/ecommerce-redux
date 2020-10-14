import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import SliderCarousel from '../component/SliderCarousel'

import {Container, Row, Col} from 'reactstrap'

import ProductCategoryAction from '../redux/actions/categoryProduct'

export default function CategoryProduct(props) {
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(ProductCategoryAction.getCatProduct())
    }, [dispatch])

    const productState = useSelector(state=>state.categoryproduct)

    const {data, isLoading, isError} = productState
    // console.log(data)
    return (
        <div className='d-flex'>
            {Object.keys(data) && data.length && data.map((items, index) => {
                // console.log(items.category_color)
                return(
                    <Col>
                        <SliderCarousel name={items.category_name} url={items.url_image} color={items.category_color}/>
                    </Col>
                )
            })}
        </div>
    )
}
