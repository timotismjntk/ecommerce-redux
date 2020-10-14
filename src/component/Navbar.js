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

import cartAction from '../redux/actions/cart'
import searchAction from '../redux/actions/search'

const NavbarHooks = (props) => {

    const dispatch = useDispatch()

    const profileState =  useSelector(state=>state.profile)

    const {data} = profileState
    const token = useSelector(state=>state.auth.token)
    
    const [openNav, setOpenNav] = useState(false);
    const [search, setSearch] = useState([]);
    const [tempOrderBy, setTempOrderBy] = useState('ASC');
    const [tempSortBy, setTempSortBy] = useState('name');
    const [orderBy, setOrderBy] = useState('SortBy');
    let [sortBy, setSortBy] = useState('Ascending');
    const [limit, setLimit] = useState(10);
    const hasil = search


    useEffect(()=>{
        localStorage.setItem('customertoken', token)
    }, [token])
    
    const loginLink = (
        <ul className="navbar-nav btn-user ml-auto">
            <li className="nav-item">
                <button className="btn btn-primary rounded-pill mr-2 p-0 login">
                    <Link to="/login" className="nav-link text-white p-0">Login</Link>
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
                <a href='/user/cart' className="mail">
                    <img className="cart-icon mr-4" src={Mail} alt="mail" />
                </a>
            </li>
            <Link to='/user/profile' className="profile cart ml-auto mr-4">
                <img className="cart-icon rounded-circle" src={data.profile_picture} style={{width: '50px', height: 'auto', objectFit: 'contain'}} alt="profile" />
            </Link>
            {/* <li className="nav-item">
                <a href='/user/cart' className="profile mr-4">
                    <img className="cart-icon" src={Profile} alt="profile" />
                </a>
            </li> */}
        </ul>
    )

    return (
        <Container fluid={true} className='sticky-top' style={{backgroundColor: 'white'}}>
            <Container>
                <Navbar dark expand="md" className="sticky-top d-flex align-items-center w-100"> 
                <NavbarBrand>
                    <Link to="/" className="nav-link text-white p-0">Login<img src={Brand} alt="logo" /></Link>
                </NavbarBrand>
                <NavbarToggler className='buttonToggler' onClick={() => {setOpenNav(!openNav)}}/>
                <Collapse isOpen={openNav} navbar className='joinNav'>
                    <Nav className="customNav d-flex align-items-center justify-content-center ml-5" navbar>
                        <NavItem className="d-flex justify-content-between">
                            <Form onSubmit={()=>{dispatch(searchAction.searchProduct({search: hasil}))}} className="form d-flex flex-row align-items-center">
                                <div className="search-bar">
                                    <Input onChange={(e) => {
                                    setSearch(e.target.value)}} autoComplete='off' style={{width: '430px'}} className="form-control" placeholder="Search" value={search} />
                                    {search.length !== 0 ? <Button onClick={()=>{setSearch([]); setSortBy([])}} className="iconSearch" close /> : null}
                                    
                                </div>
                                <Link to={`/search/product?search=${search}`} onClick={()=>{dispatch(searchAction.searchProduct({search: hasil}))}} className="cart ml-auto mr-4">
                                <img src={Search} alt='search' />
                                </Link>
                                <Button type="button" id="filter" style={{marginLeft: '20px'}} className="btn btn-outline-dark filter"><img className="filter-icon" src={Filter} alt="filter"/></Button>
                            </Form>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto anotherCustomNav" navbar>
                        <NavItem className='mr-auto cust'>
                            <div className="d-flex align-items-center justify-content-center"> 
                    <Link to='/user/cart' className="cart ml-auto mr-4">
                        <img className="cart-icon" src={Cart} alt="cart" />
                    </Link>
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

