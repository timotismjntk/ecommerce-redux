import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import profileAction from '../redux/actions/profile'
import Navbar from '../component/Navbar'
import CustomerProfile from '../component/CustomerProfile'
import CustomerAddress from '../component/Address'
import AddressModal from '../component/AddressModal'
import MyOrder from '../component/MyOrder'

import '../assets/css/profile.css';

import userImg from '../assets/images/profil1.svg'
import userIcon from '../assets/images/user-icon.svg'
import editIcon from '../assets/images/pen.svg'
import orderIcon from '../assets/images/order-icon.svg'
import addressIcon from '../assets/images/map-icon.svg'

import { Container, Input, Form, Button } from 'reactstrap'

export default function Profile(props) {
  const token = useSelector(state=>state.auth.token)
  const user = useSelector(state=>state.profile)
  const dispatch = useDispatch()

  const [account, setAccount] = useState(true)
  const [shipping, setShipping] = useState(false)
  const [order, setOrder] = useState(false)

  const {data, updated} = user

  useEffect(()=>{
    dispatch(profileAction.getProfile(token))
    if (updated) {
      dispatch(profileAction.getProfile(token))
    }
  },[dispatch, token, updated])
  return (
    <div style={{backgroundColor: 'white'}}>
        <Navbar />
        <div className="wrapper">
          <div className="boxUser">
            <div className="d-flex flex-column pt-5 justify-content-center align-items-center">
                {/* <div className="col col-3 pt-4 mt-5"> */}
              <div className="d-flex flex-row">
                <div className="mr-3 image-crop">
                    <img src={data.profile_picture} alt="profile" className='rounded-circle profile-pic' />
                </div>
                <div className="d-flex flex-column">
                    <div className="name">
                        <span className="font-weight-bold">{data.name}</span>
                    </div>
                    <div className="edit d-flex align-items-center">
                            <div className="icon mr-2"><img src={editIcon} alt="edit" />
                            </div>
                            <div className="change">
                                <Button outline='light' onClick={()=>{setAccount(true); setShipping(false); setOrder(false)}}><span className="text-secondary">Ubah profile</span></Button>
                            </div>
                    </div>
                </div>
              </div>

              <div className="mt-5 d-flex flex-column">
                <div className="d-flex align-items-center justify-content-start mb-3">
                    <div className="mr-2">
                        <Button onClick={()=>{setAccount(true); setShipping(false); setOrder(false)}} className="mr-2 rounded-circle" style={{backgroundColor: '#456BF3'}}>
                          <img src={userIcon} alt="icon" />
                        </Button>
                    </div>
                    <div className="">
                        <span onClick={()=>{setAccount(false); setShipping(true); setOrder(false)}} className={account ? 'text-dark' : 'text-secondary'} style={{fontWeight: '500'}}>My Account</span>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-start mb-3">
                    <div className="mr-2">
                        <Button onClick={()=>{setAccount(false); setShipping(true); setOrder(false)}} className="mr-2 rounded-circle" style={{backgroundColor: '#F36F45'}}>
                          <img src={addressIcon} alt="location" />
                        </Button>
                    </div>
                    <div className="">
                        <span onClick={()=>{setAccount(false); setShipping(true); setOrder(false)}} className={shipping ? 'text-dark' : 'text-secondary'} style={{fontWeight: '500'}}>Shipping Address</span>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-start mb-3">
                    <div className="mr-2">
                        <Button onClick={()=>{setAccount(false); setShipping(false); setOrder(true)}} className="mr-2 rounded-circle" style={{backgroundColor: '#F3456F'}}>
                          <img src={orderIcon} alt="order" />
                        </Button>
                    </div>
                    <div className="">
                        <span onClick={()=>{setAccount(false); setShipping(false); setOrder(true)}} className={order ? 'text-dark' : 'text-secondary'} style={{fontWeight: '500'}}>My Order</span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        
          {account ? <div className="boxDetail" style={{marginLeft: '-9px'}}>
            <CustomerProfile name={data.name} email={data.email} phone={data.phone_number}/>
          </div> : null}

            {shipping ? <CustomerAddress /> : null}
            {order? <MyOrder /> : null }
        </div>
        {/* {<AddressModal />} */}
    </div>
  )
}