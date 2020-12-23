import React from 'react'
import {Card, CardBody, CardImg, CardTitle, CardSubtitle} from 'reactstrap'

import Rating from '../component/Rating'

import '../assets/css/card.css';

const {REACT_APP_BACKEND_URL} = process.env


export default function ProductCard(props) {
    return (
        <Card style={{radius: '8px'}}>
            <CardImg top width="100%" style={{width: '238px', height: '136px', objectFit: 'contain'}} src={REACT_APP_BACKEND_URL+props.url} className='customCard' alt='item' />
            <CardBody>
                <CardTitle style={{fontWeight: 'bold', fontSize: '16px'}}>{props.name.length > 30 ? props.name.slice(0, 28) + '...' : props.name}</CardTitle>
                <CardSubtitle style={{fontWeight: '500', color: '#DB3022', fontSize: '16px'}}>Rp. {props.price}</CardSubtitle>
                <CardSubtitle className='mt-2 text-secondary' style={{fontWeight: '500', fontSize: '16px'}}>Zalora</CardSubtitle>
                <Rating number={props.rating}/>
            </CardBody>
        </Card>
    )
}
