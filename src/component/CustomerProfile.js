import React from 'react'
import { Container, Input, Form, Button } from 'reactstrap'
import userImg from '../assets/images/profil1.svg'


export default function CustomerProfile() {
    return (
        <div className="wrapperDetailUser d-flex flex-row mt-5">
            <div>
            <div className="d-flex flex-column tableUser ml-5 position-absolute">
            <div className="title">
                <span className="font-weight-bold">My Profile</span>
            </div>
            <div className="subtitle">
                <span className="text-secondary">Manage your profile information</span>
            </div>
            <div className="line1 mt-4 mb-4"></div>
            <div className="formUser">
                <Form className="data-list d-flex flex-column justify-content-center w-75">

                    <div className="form-group d-flex align-items-center row w-100">                    
                    <div className='d-flex align-items-center w-75'>
                        <span className="text-secondary col-5 text-right">Name</span>
                        <div className='col-9'>
                        <Input className="input-name w-75" type="text" name="name" placeholder="Name" />
                        </div>
                    </div>
                    </div>
                
                    <div className="email form-group align-items-center d-flex row w-100">
                    <div className="d-flex align-items-center w-75">
                        <span className="text-secondary col-5 text-right">Email</span>
                        <div className="col-9">
                        <Input className="input-email w-75" type="email" name="email"   placeholder="Email" />
                        </div>
                    </div>
                    </div>

                    <div className="phoneNumber form-group d-flex align-items-center row w-100">
                    <div className="d-flex align-items-center w-75">
                        <span className="text-secondary col-5 text-right">Phone Number</span>
                        <div className="col-9 w-100 d-flex flex-center">
                        <Input className="input-number w-75" type="text" name="phone-number" placeholder="Phone Number" />
                        </div>
                    </div>
                    </div>

                    <div className="gender form-group d-flex row align-items-center w-75">
                    <div className="d-flex align-items-center justify-content-between w-75">
                        <span className="ml-3 col-6 text-right text-secondary">Gender</span> 
                                
                        <div className='d-flex col-5'>
                        <div className="form-check">
                            <Input className="form-check-input" type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="radio-input" />
                        </div>
                        <div>
                            <span className="text-secondary">Laki-laki</span>
                        </div>
                        </div>

                        <div className='d-flex'>
                            <div className="form-check">
                            <Input className="form-check-input" type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="radio-input" />
                        </div>
                        <div>
                            <span className="text-secondary">Perempuan</span>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="form-group row align-items-center w-100">
                    <div className='d-flex align-items-center justify-content-between w-50'>
                        <span className="ml-2 col-7 text-right text-secondary">Date of Birth</span>
                        <div className="tanggal col-9 d-flex">
                        <div className="date dropdown">
                            <button type="button" className="btn-secondary d-flex align-items-center justify-content-between dropdown-toggle">1</button>
                        </div>
                        <div className="month dropdown ml-2">
                            <button type="button" className="btn-secondary d-flex align-items-center justify-content-between dropdown-toggle">January</button>
                        </div>
                        <div className="year dropdown ml-2">
                            <button type="button" className="btn-secondary d-flex align-items-center justify-content-between dropdown-toggle">1990</button>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="save form-group mt-4 row align-items-center justify-content-center w-100">
                    <div className="col-3 ml-1 d-flex">
                        <button className="btn-primary rounded-pill w-100">Save</button>
                    </div>
                    </div>
                </Form>
            <div className="line">
            </div>
            <div class="customer">
                <div class="pics d-flex flex-column align-items-center">
                <div class="foto">
                    <img src={userImg} style={{width: '100px'}} alt="profil" />
                </div>
                <div class="select pt-4">
                    <button class="btn-outline-secondary rounded-pill">Select image</button>
                </div>
                </div>
            </div>   
            </div>
            </div>
            </div>
        </div>
    )
}
