import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
import '../assets/css/myorder.css';


export default function MyOrder() {
    return (
        <div className="wrapperDetailUser d-flex mt-5">
            <div className="d-flex flex-column tableUser ml-5 position-absolute">
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
            </div>
        </div>
    )
}
