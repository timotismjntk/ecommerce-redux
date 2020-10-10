import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Link, withRouter } from 'react-router-dom' // harus di import untuk berpindah halaman

import Brand from '../assets/images/logo.svg'
import Search from '../assets/images/Search.svg'
import Filter from '../assets/images/filter.svg'
import Cart from '../assets/images/cart.svg'
import Bell from '../assets/images/bell.svg'
import Mail from '../assets/images/mail.svg'
import Profile from '../assets/images/profile.svg'

import { Container, Nav, Collapse, Form, Navbar,
    NavbarToggler, NavbarBrand,Button, Input,
    NavItem
 } from 'reactstrap';
import '../assets/css/style.css';

const NavbarHooks = (props) => {

    const token = useSelector(state=>state.auth.token)
    const [openNav, setOpenNav] = useState(false)

    useEffect(()=>{
        localStorage.setItem('customertoken', token)
    }, [token])
    
    const loginLink = (
        <ul className="navbar-nav btn-user ml-auto">
            <li className="nav-item">
                <button className="btn btn-primary rounded-pill mr-2 p-0 login">
                    <Link to="/user/login" className="nav-link text-white p-0">Login</Link>
                </button>
            </li>
            <li className="nav-item btn-user">
                <button className="btn btn-outline-secondary rounded-pill p-0">
                    {/* <Link to="/user/register" className="nav-link text-secondary p-0">Signup</Link> */}
                    <Link to="/admin" className="nav-link text-secondary p-0">Admin</Link>
                </button>
            </li>
        </ul>
    )
    const userLink = (
        <ul className="navbar-nav d-flex align-items-center">
            <li className="nav-item">
                <span></span>
            </li>
            <li className="nav-item">
                <a href='/#' className="bell">
                    <img className="cart-icon mr-4" src={Bell} alt="bell" />
                </a>
            </li>
            <li className="nav-item">
                <a href='/#' className="mail">
                    <img className="cart-icon mr-4" src={Mail} alt="mail" />
                </a>
            </li>
            <li className="nav-item">
                <a href='/#' className="profile mr-4">
                    <img className="cart-icon" src={Profile} alt="profile" />
                </a>
            </li>
        </ul>
    )

    return (
        <Container fluid={true} className='sticky-top' style={{backgroundColor: 'white'}}>
            <Container>
                <Navbar dark expand="md" className="sticky-top d-flex align-items-center w-100"> 
                <NavbarBrand><img src={Brand} alt="logo" /></NavbarBrand>
                <NavbarToggler className='buttonToggler' onClick={() => {setOpenNav(!openNav)}}/>
                <Collapse isOpen={openNav} navbar className='joinNav'>
                    <Nav className="customNav d-flex align-items-center justify-content-center ml-5" navbar>
                        <NavItem className="d-flex justify-content-between">
                            <Form className="form d-flex flex-row align-items-center">
                                <div className="search-bar">
                                    <Input type="text" className="form-control" placeholder="Search" />
                                </div>
                                <a href='/#'><img className="search-icon w-100" src={Search} alt="search" /></a>
                                <Button type="button" id="filter" className="btn btn-outline-dark filter"><img className="filter-icon" src={Filter} alt="filter"/></Button>
                            </Form>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto anotherCustomNav" navbar>
                        <NavItem className='mr-auto cust'>
                            <div className="d-flex align-items-center justify-content-center">  
                                <a href='/#' className="cart ml-auto mr-4">
                                    <img className="cart-icon" src={Cart} alt="cart" />
                                </a>
                                {localStorage.customertoken ? userLink : loginLink}
                            </div>
                        </NavItem>
                    </Nav>
                </Collapse>
                </Navbar>
            </Container>
        </Container>
    )
}

export default withRouter(NavbarHooks)

