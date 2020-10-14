import React from 'react'

export default function SliderCarousel(props) {
    return (
        <div className="">
            <div style={{backgroundColor: props.color}} className="item column position-relative d-flex justify-content-center align-items-center">
                <img src={props.url} style={{width: '180px', height: '163px', objectFit: 'contain'}} className="img1 rounded" alt="gambar" />
                <span className="position-absolute caption2 font-weight-bold">{props.name}</span>
            </div>
        </div>
    )
}
