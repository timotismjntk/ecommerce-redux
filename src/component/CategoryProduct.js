import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import SliderCarousel from '../component/SliderCarousel'

import {Container, Row, Col} from 'reactstrap'
import { useHistory } from 'react-router-dom'

import ProductCategoryAction from '../redux/actions/categoryProduct'

export default function CategoryProduct(props) {
    
    const {REACT_APP_BACKEND_URL} = process.env
    
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(()=>{
        dispatch(ProductCategoryAction.getCatProduct())
    }, [])

    const productState = useSelector(state=>state.categoryproduct)

    const {data, isLoading, isError} = productState

    const gotoCategoryDetail = (value) => {
        history.push(`/product/category?name=${value}`)
    }
    // console.log(data)
    return (
        <div className='d-flex'>
            {Object.keys(data) && data.length && data.map((items, index) => {
                // console.log(items.category_color)
                return(
                    <Col>
                        <SliderCarousel press={() => gotoCategoryDetail(items.category_name)} name={items.category_name} url={REACT_APP_BACKEND_URL + items.url_image.slice(22, items.url_image.length)} color={items.category_color}/>
                    </Col>
                )
            })}
        </div>
    )
}
