import React from 'react'
import {Button} from 'reactstrap'

import '../assets/css/address.css';

export default function Address() {
    return (
        <div className="wrapperDetailUser d-flex mt-5">
            <div className="d-flex flex-column tableUser ml-5 position-absolute">

                <div className="title">
                    <span className="font-weight-bold">Choose another address</span>
                </div>

                <div className="subtitle">
                    <span className="text-secondary">Manage your shipping address</span>
                    <div className="line1 mt-4 mb-4"></div>
                </div>
                
                <div className='d-flex justify-content-center align-items-center'>
                    <Button className='mt-3 addressBtn btn-light'>
                        <span className="text-secondary h5 addressText" style={{textDecoration: 'none !important;'}}>Add new address</span>
                    </Button>
                </div>

                <div className='w-100 align-items-center d-flex justify-content-center'>
                    <div className="d-flex flex-column mt-5 address"> 
                        <p className="recipientName font-weight-bold">Andreas Jane</p>
                        <span className="recipientAddress">Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</span>
                        <div className='d-flex flex-start mt-2'>
                            <Button>
                                Change address
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
