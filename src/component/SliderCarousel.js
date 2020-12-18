import React from 'react'
import {Button} from 'reactstrap'

export default function SliderCarousel(props) {
    return (
        <Button outline color="link" onClick={props.press}>
            <div style={{backgroundColor: props.color}} className="item column position-relative d-flex justify-content-center align-items-center">
                <img src={props.url} style={{width: '180px', height: '163px', objectFit: 'contain'}} className="img1 rounded" alt="gambar" />
                <span className="position-absolute caption2 font-weight-bold">{props.name}</span>
            </div>
        </Button>
    )
}
