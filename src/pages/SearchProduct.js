import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
// import {Link} from 'react-router-dom'
import { Container } from 'reactstrap'
// import {connect} from 'react-redux'
import Navbar from '../component/Navbar'
import Newproduct from '../component/NewProduct'
import SearchingResult from '../component/searchItem'
import CategoryProduct from '../component/CategoryProduct'

// import authAction from '../redux/actions/auth'
import searchAction from '../redux/actions/search'

import '../assets/css/ecommerce.css';

const SearchProduct = (props) => {
  const searchHistory = props.location.search

    // search process is in component navbar
  console.log(props)
    return (
      <React.Fragment>
        <Navbar />
        <Container className='mt-5 vh-100'>
          
            <div className="category mt-5 w-50 d-flex align-items-center">
                <h3>Showing results for: <h4 style={{color: 'red'}}>{searchHistory.slice(8, searchHistory.length)}</h4></h3>
                {/* <span className="detail">Searching product results</span> */}
            </div>

            <div className='mt-5'>
                <SearchingResult />  
            </div>    
        </Container>
      </React.Fragment>
    )

}

export default  SearchProduct