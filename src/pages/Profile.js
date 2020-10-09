import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import profileAction from '../redux/actions/profile'
import Navbar from '../component/Navbar'

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
  useEffect(()=>{
    dispatch(profileAction.getProfile(token))
  },[dispatch, token])
  return (
    <div>
      <Navbar />
      <Container>
        <div className="wrapper">
          <div className="boxUser">
            <div className="d-flex flex-column pt-5 justify-content-center align-items-center mr-4">
                {/* <div className="col col-3 pt-4 mt-5"> */}
              <div className="d-flex flex-row">
                <div className="mr-3">
                    <a href='/login'><img src={userImg} alt="profile" /></a>
                </div>
                <div className="d-flex flex-column">
                    <div className="name">
                        <span className="font-weight-bold">Johanes Mikael</span>
                    </div>
                    <div className="edit d-flex align-items-center">
                            <div className="icon mr-2">
                                <a href='/login'><img src={editIcon} alt="edit" /></a>
                            </div>
                            <div className="change">
                                <a href='/login'><span className="text-secondary">Ubah profile</span></a>
                            </div>
                    </div>
                </div>
              </div>

              <div className="mt-5 d-flex flex-column">
                <div className="d-flex align-items-center justify-content-start mb-3">
                    <div className="mr-2">
                        <Button className="mr-2 rounded-circle" style={{backgroundColor: '#456BF3'}}><img src={userIcon} alt="icon" /></Button>
                    </div>
                    <div className="teks">
                        <a href='/'><span className="text-dark">My Account</span></a>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-start mb-3">
                    <div className="mr-2">
                        <Button className="mr-2 rounded-circle" style={{backgroundColor: '#F36F45'}}><img src={addressIcon} alt="location" /></Button>
                    </div>
                    <div className="">
                        <a href='/'><span className="text-secondary">Shipping Address</span></a>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-start mb-3">
                    <div className="mr-2">
                        <Button className="mr-2 rounded-circle" style={{backgroundColor: '#F3456F'}}><img src={orderIcon} alt="order" /></Button>
                    </div>
                    <div className="">
                        <a href='/'><span className="text-secondary">My Order</span></a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        
        
          <div className="boxDetail">
          <div className="wrapperDetailUser">
                <div className="d-flex flex-column tableUser mt-5 ml-5 p-5">
                  <div className="title">
                      <span className="font-weight-bold">My Profile</span>
                  </div>
                  <div className="subtitle">
                      <span className="text-secondary">Manage your profile information</span>
                  </div>
                  <div className="line1 mt-4 mb-5"></div>
                  <div className="data row">
                    <div className="col-8">
                    <Form className="data-list">
                      <div className="name form-group row align-items-center">
                        <span className="col-3 text-right text-secondary">Name</span>
                        <div className="col-9">
                          <Input className="input-name" type="text" name="name" placeholder="Name" />
                        </div>
                      </div>
                    
                      <div className="email form-group row align-items-center">
                        <span className="col-3 text-right text-secondary">Email</span>
                        <div className="col-9">
                          <Input className="input-email" type="email" name="email" placeholder="Email" />
                        </div>
                      </div>

                      <div className="phoneNumber form-group row align-items-center">
                        <span className="col-3 text-right p-0 text-secondary">Phone Number</span>
                        <div className="col-9">
                          <Input className="input-number" type="text" name="phone-number" placeholder="Phone Number" />
                        </div>
                      </div>

                      <div className="gender form-group row align-items-center">
                        <span className="col-3 text-right p-0 text-secondary">Gender</span>
                        <div className="col-9 d-flex w-100 vs align-items-center justify-content-between">
                        <div className="form-check">
                          <Input className="form-check-input position-absolute" type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="radio-input" />
                        </div>

                        <div className="align-items-center">
                          <span className="text-secondary">Laki-laki</span>
                        </div>

                        <div className="radio">
                          <Input type="radio" name="gender" />
                        </div>

                        <div className="form-check">
                          <Input className="form-check-input position-absolute" type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="radio-input" />
                        </div>

                        <div>
                          <span className="text-secondary">Perempuan</span>
                        </div>

                      </div>

                      </div>

                      <div className="form-group row align-items-center">
                        <span className="col-3 text-right p-0 text-secondary">Date of Birth</span>
                      <div className="tanggal col-9 d-flex w-100 justify-content-between">

                      <div className="date dropdown">
                        <button type="button" className="btn-secondary d-flex align-items-center justify-content-between dropdown-toggle">1</button>
                      </div>

                      <div className="month dropdown">
                        <button type="button" className="btn-secondary d-flex align-items-center justify-content-between dropdown-toggle">January</button>
                      </div>

                      <div className="year dropdown">
                        <button type="button" className="btn-secondary d-flex align-items-center justify-content-between dropdown-toggle">1990</button>
                      </div>

                      </div>

                        </div>

                        <div className="save form-group mt-5 row align-items-center">
                          <span className="col-3 text-right p-0"></span>
                          <div className="col-7 d-flex align-items-center">
                            <button className="btn-primary rounded-pill">Save</button>
                          </div>
                        </div>
                      </Form>
                  
                    </div>

                    <div className="line ml-5 mr-3">
                    </div>

                    <div className="col-3 w-100">
                      <div className="pics d-flex flex-column align-items-center">
                      <div className="foto">
                      <img src={userImg} alt="profil" />
                    </div>

                    <div className="select pt-4">
                      <button className="btn-outline-secondary rounded-pill">Select image</button>
                    </div>
                    
                    </div>
                    </div>
                  </div>
                  </div>
                </div>
            </div>
          
          </div>
        </Container>
      </div>
  )
}