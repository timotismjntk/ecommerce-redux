import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Link, withRouter } from 'react-router-dom' // harus di import untuk berpindah halaman
import { useHistory } from 'react-router-dom'

import Brand from '../assets/images/logo.svg'
import Search from '../assets/images/Search.svg'
import Filter from '../assets/images/filter.svg'
import Cart from '../assets/images/cart.svg'
import Bell from '../assets/images/bell.svg'
import Mail from '../assets/images/mail.svg'
import Profile from '../assets/images/profile.svg'

import { Container, Nav, Collapse, Form, Navbar,
    NavbarToggler, NavbarBrand,Button, Input,
    NavItem, UncontrolledPopover, PopoverHeader, PopoverBody
 } from 'reactstrap';
import '../assets/css/style.css';

import cartAction from '../redux/actions/cart'
import searchAction from '../redux/actions/search'
import authAction from '../redux/actions/auth'
import FilterModal from './FilterModal'
import ModalResponse from './ModalResponse'

const NavbarHooks = (props) => {

    const {REACT_APP_BACKEND_URL} = process.env

    const history = useHistory()
    const dispatch = useDispatch()

    const profileState =  useSelector(state=>state.profile)

    const {data} = profileState
    const token = useSelector(state=>state.auth.token)
    const {isLogin} = useSelector(state => state.auth)
    
    const [openNav, setOpenNav] = useState(false);
    const [search, setSearch] = useState('');
    const [modal, setModal] = useState(false)
    const [modalMessage, setModalMessage] = useState(false);
    const [tempOrderBy, setTempOrderBy] = useState('ASC');
    const [tempSortBy, setTempSortBy] = useState('name');
    const [orderBy, setOrderBy] = useState('SortBy');
    let [sortBy, setSortBy] = useState('Ascending');
    const [limit, setLimit] = useState(10);
    const hasil = search
    const [searchQuery, setSearchQuery] = useState('')

    const { location: {search: searchs} } = props;
    useEffect(() => {
      setSearchQuery(searchs.slice(8, searchs.lenght))
    }, [])

    useEffect(()=>{
      if (searchQuery) {
        dispatch(searchAction.searchProduct({search: searchQuery}))
      } else {
        dispatch(searchAction.searchProduct({search: hasil}))
      }
    }, [searchQuery])

    const searchItems = (e) => {
        e.preventDefault()
        dispatch(searchAction.searchProduct({search: hasil}))
        history.push(`/search/product?search=${search}`)
    }

    const logOut = () =>{
        if(isLogin) {
            setModalMessage(true)
            dispatch(authAction.logout())
        }
    }

    const openFilterModal = () => {
        setModal(true)
    }
    
    const loginLink = (
        <ul className="navbar-nav btn-user ml-auto">
            <li className="nav-item">
                <button className="btn btn-primary rounded-pill mr-2 p-0 login">
                    <Link to="/login" className="nav-link text-white p-0">Login</Link>
                </button>
            </li>
            <li className="nav-item btn-user">
                <button className="btn btn-outline-secondary rounded-pill p-0">
                    <Link to="/signup" className="nav-link text-secondary p-0">Register</Link>
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
                <img className="cart-icon mr-4" src={Bell} alt="bell" />
            </li>
            <li className="nav-item">
                <img className="cart-icon mr-4" src={Mail} alt="mail" />
            </li>
            <Button className="profile cart ml-auto mr-4 image-crop2" outline color='light' id="UncontrolledPopover" type="button">
                <div style={{width: "30px", height: "30px", backgroundImage: `url(${data.profile_picture ? data.profile_picture : `https://ui-avatars.com/api/?size=50&name=${data.name}`})`, backgroundSize: "cover", display: "block", backgroundPosition: "center",borderRadius: "100px", BorderRadius: "100px"}}></div>
            </Button>
            <UncontrolledPopover placement="bottom" target="UncontrolledPopover">
                <PopoverHeader><Link to='/user/profile' className="text-secondary text-center profile cart ml-auto mr-4" id="UncontrolledPopover" type="button">Profile</Link>
                </PopoverHeader>
                <PopoverBody><Button onClick={logOut} outline color='light' className="text-secondary">Logout</Button></PopoverBody>
            </UncontrolledPopover>
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
                            <Form onSubmit={searchItems} className="form d-flex flex-row align-items-center">
                                <div className="search-bar">
                                    <Input onChange={(e) => {
                                    setSearch(e.target.value)}} style={{width: '430px'}} className="form-control" placeholder="Search" value={search} />
                                    {search.length !== 0 ? <Button onClick={()=>{setSearch(''); setSortBy([])}} className="iconSearch" close /> : null}
                                    
                                </div>
                                <Link to={`/search/product?search=${search}`} onClick={()=>{dispatch(searchAction.searchProduct({search: hasil}))}} className="cart ml-auto mr-4">
                                <img src={Search} alt='search' />
                                </Link>
                                <Button type="button" onClick={openFilterModal} id="filter" style={{marginLeft: '20px'}} className="btn btn-outline-dark filter"><img className="filter-icon" src={Filter} alt="filter"/></Button>
                            </Form>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto anotherCustomNav" navbar>
                        <NavItem className='mr-auto cust'>
                            <div className="d-flex align-items-center justify-content-center"> 
                            <Link to='/user/cart' className="cart ml-auto mr-4">
                                <img className="cart-icon" src={Cart} alt="cart" />
                            </Link>
                            {localStorage.token ? userLink : loginLink}
                            </div>
                        </NavItem>
                    </Nav>
                </Collapse>
                </Navbar>
            </Container>
            <FilterModal open={modal} close={() => setModal(false)}  />
            <ModalResponse open={modalMessage} close={()=>{setModalMessage(false)}} message={'Logout succesfully'}/>
        </Container>
    )
}

export default withRouter(NavbarHooks)

