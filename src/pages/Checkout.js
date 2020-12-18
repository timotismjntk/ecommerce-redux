import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Container, CustomInput, Input , Row, Col, Label, Button} from 'reactstrap'

import Navbar from '../component/Navbar'
import CheckoutComponent from '../component/Checkout'

export default function Checkout() {
    return (
        <div>
            <Navbar />
            <div className='mt-5'>
                <CheckoutComponent />
            </div>
        </div>
    )
}
