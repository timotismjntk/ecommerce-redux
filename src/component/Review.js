import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import star from '../assets/images/Star.svg'
import Rating from '../component/Rating'

export default function Review() {
    const productState = useSelector(state=>state.detailproduct)
    const {data} = productState

    return (
        <div className="review-stats row mt-5 mb-5">
            <div className="col-5">
                <div className="row">
                    <div className="col-12">
                        <h3>Product Review</h3>
                    </div>
                    <div className="col-3 d-flex justify-content-center align-items-center">
                    <div className="row no-gutters">
                        <div className="col-12">
                            <span className="display-4 rata-rata">{data.total_rating}.0</span><span className="text-secondary">/5</span>
                        </div>
                        <Rating number={data.total_rating} />
                    </div>
                </div>
                <div className="col-9">
                {[1, 2, 3, 4, 5].reverse().map((el, i) => {
                    if (el === data.total_rating) {
                        return (
                            <div className="row no-gutters my-1 rating-bar d-flex justify-content-center align-items-center">
                                <div className="col-1 d-flex justify-content-center align-items-center">
                                    <img src={star} alt="star" />
                                </div>
                                <div className="col-1 d-flex justify-content-center align-items-center">
                                    <span className="text-secondary">{el}</span>
                                </div>
                                <div className="col d-flex justify-content-start align-items-center">
                                    <div className="bg-danger rounded-pill mx-2 progress-bar">
                                    </div>
                                </div>
                                <div className="col-1 d-flex justify-content-center align-items-center">
                                    <span className="text-secondary">5</span>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div className="row no-gutters my-1 rating-bar d-flex justify-content-center align-items-center">
                                <div className="col-1 d-flex justify-content-center align-items-center">
                                    <img src={star} alt="star" />
                                </div>
                                <div className="col-1 d-flex justify-content-center align-items-center">
                                    <span className="text-secondary">{el}</span>
                                </div>
                                <div className="col d-flex justify-content-start align-items-center">
                                    <div className="rounded-pill mx-2 progress-bar2">
                                    </div>
                                </div>
                                <div className="col-1 d-flex justify-content-center align-items-center">
                                    <span className="text-secondary">0</span>
                                </div>
                            </div>
                        )
                    }
                })}
                </div>
                </div>
            </div>
            <div className="w-100 mt-5" style={{borderBottom: '1px solid #D4D4D4'}} />
        </div>
    )
}
