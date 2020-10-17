import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Container, Alert, Button, 
    Col, Media, Label, Form, Input } from 'reactstrap'
import profileAction from '../redux/actions/profile'
// import userImg from '../assets/images/profil1.svg'
import http from './../helpers/http'

import '../assets/css/profile.css';
import ModalResponse from './ModalResponse'

export default function CustomerProfile(props) {
    const dispatch = useDispatch()
    const profileState =  useSelector(state=>state.profile)
    const {data, alertMsg, updated, isLoading} = profileState

    const token = useSelector(state=>state.auth.token)

    
  useEffect(()=>{
    // dispatch(profileAction.getProfile(token))
    if (updated) {
        dispatch(profileAction.getProfile(token))
        setModalOpen(true)
    }
    if (isLoading) {
        alert('true')
        dispatch(profileAction.getProfile(token))
    }
  },[dispatch, token, updated, isLoading])

    const [dropdownOpen, setOpen] = useState(false);

    const [userName, setName] = useState(data.name)
    const [userEmail, setEmail] = useState(data.email)
    const [phoneNumber, setPhone] = useState(data.phone_number)
    const [Gender, setGender] = useState(data.gender)
    const [userImage, setImage] = useState(data.profile_picture)
    const [userDateOfBirth, setDateOfBirth] = useState(data.dateOfBirth)
    const [modalOpen, setModalOpen] = useState(false)
    const [myFile, setMyFile] = useState()

    const onSaveProfile=(e)=>{
        e.preventDefault();
        const info = {
            name: userName,
            email: userEmail,
            phone_number: phoneNumber,
            gender: Gender,
            // profile_picture: userImage,
            dateOfBirth: userDateOfBirth,
        }
        dispatch(profileAction.updateProfile(token, info))
    }
    
    const uploadFile = async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('picture', e.target.files[0])
        const data = await http(token).patch(`manage/users`, form)
        console.log(data)
        if(data.status === 200) {
            console.log(data)
            alert(data.data.message)
            dispatch(profileAction.getProfile(token))
        }
    }


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
                                <Input onChange={(e) => {setName(e.target.value)}} className="input-name w-75" type="text" name="userName" value={userName} placeholder="Name" />
                                </div>
                            </div>
                            </div>
                        
                            <div className="email form-group align-items-center d-flex row w-100">
                            <div className="d-flex align-items-center w-75">
                                <span className="text-secondary col-5 text-right">Email</span>
                                <div className="col-9">
                                <Input onChange={(e) => {setEmail(e.target.value)}} className="input-email w-75" type="email" name="email" value={userEmail}   placeholder="Email" />
                                </div>
                            </div>
                            </div>

                            <div className="phoneNumber form-group d-flex align-items-center row w-100">
                            <div className="d-flex align-items-center w-75">
                                <span className="text-secondary col-5 text-right">Phone</span>
                                <div className="col-9 w-100 d-flex flex-center">
                                <Input onChange={(e) => {setPhone(e.target.files)}} className="input-number w-75" type="phone" name="phone_number" value={phoneNumber} placeholder="Phone Number" />
                                </div>
                            </div>
                            </div>

                            <div className="gender form-group d-flex row align-items-center w-75">
                            <div className="d-flex align-items-center justify-content-between w-75">
                                <span className="ml-3 col-6 text-right text-secondary">Gender</span> 
                                        
                                <div className='d-flex col-5'>
                                    {['Male', 'Female'].map((item, index)=>{
                                        return(
                                            <Label className={index===0?'ml-2':'ml-5'}>
                                                <Input onChange={()=>{setGender(item)}} name="Gender" type="radio" checked={item===Gender} value={item} />
                                                <span>{item}</span>
                                            </Label>
                                        )
                                    })}
                                </div>
                            </div>
                            </div>

                            <div className="form-group row align-items-center w-100">
                            <div className='d-flex align-items-center justify-content-between w-50'>
                                <span className="ml-2 col-7 text-right text-secondary">Date of Birth</span>
                                <div className="tanggal col-9 d-flex">
                                    <Input onChange={(e)=>{setDateOfBirth(e.target.value)}} type="text" value={userDateOfBirth} className='normal' placeholder='Date Of Birth' />
                                </div>
                            </div>
                            </div>

                            <div className="save form-group mt-4 row align-items-center justify-content-center w-100">
                            <div className="col-3 ml-1 d-flex">
                                <button onClick={onSaveProfile} className="btn-primary rounded-pill w-100">Save</button>
                            </div>
                            </div>
                        </Form>
                        <div className="line"></div>
                        <div className="customer">
                            <div className="pics d-flex flex-column align-items-center">                   
                                <Col md={4} className='user'>
                                    <Media className='picts'>
                                        <Media top className='image-crop3'>
                                            <Media src={userImage!==''?userImage : ''} className='rounded-circle profile-pic3' alt="profil" />
                                        </Media>
                                    </Media>     
                                    <Media body className='ml-5 pl-3 w-100'>
                                            <Label className="btn btn-outline-secondary rounded-pill">
                                                <span>Select File</span>
                                                    <Input onChange={uploadFile} style={{display: 'none'}} type='file' name='picture' accept='.jpg,.jpeg,.png' />
                                            </Label>
                                        </Media>      
                                </Col>
                            </div>
                        </div>   
                    </div>
                    <ModalResponse open={modalOpen} close={()=>{setModalOpen(false)}} message={alertMsg}/>
                </div>
            </div>
        </div>
    )
}
