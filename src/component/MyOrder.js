import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Nav, Button, NavItem, NavLink, Col } from 'reactstrap';
import '../assets/css/myorder.css';

import orderActions from '../redux/actions/orders'

export default function MyOrder() {
    const token = useSelector(state=>state.auth.token)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(orderActions.readOrders(token))
    }, [])

    const orderState = useSelector(state=>state.orders)
    const {data} = orderState

    return (
        <div className="wrapperDetailUser d-flex mt-5">
            <div className="d-flex flex-column tableUser ml-5">
                <h4>My order</h4>
                <Nav className='myOrder' style={{borderBottom: '1px solid #D4D4D4'}}>
                    <NavItem>
                    <NavLink href="#" className='text1'>All items</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="#" className='text2'>Link</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="#" className='text3'>Not yet paid</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="#" className='text4'>Packed</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="#" className='text5'>Sent</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="#" className='text6'>Completed</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="#" className='text7'>Order cancel</NavLink>
                    </NavItem>
                </Nav>
                <Col md="12">
                    {data.length > 0 ? Object.keys(data) && Object.length && data.map((items, index)=>{
                        return (
                        <Button outline className="mt-4">
                            <div className="mt-3 d-flex" style={{flexDirection: 'column'}}>
                                <div className='d-flex' style={{alignItems: 'center'}}>
                                    <h5 className='mr-3'>Tracking number: </h5>
                                    <h4>{items.tracking_number}</h4>
                                </div>
                                <div className='d-flex' style={{alignItems: 'center'}}>
                                    <h5 className='mr-3'>Quantity: </h5>
                                    <h4>{items.total_quantity}</h4>
                                </div>
                                <div className='d-flex' style={{alignItems: 'center'}}>
                                    <h5 className='mr-3'>Total Amount: </h5>
                                    <h4> Rp. {items.summary}</h4>
                                </div>
                            </div>
                        </Button>
                    )}) : null}
                </Col>
            </div>
        </div>
    )
}
