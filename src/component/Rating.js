import React from 'react'

import yellow from '../assets/images/Star.svg'
import grey from '../assets/images/StarGrey.svg'

export default function Rating(props) {
    return (
        <div>
            {[...Array(5)].map((el, i) => {
                if(i+1 <= Math.round(props.number)){
                    return (<img src={yellow} key={i.toString()} alt='yellow'/>)
                }else {
                    return (<img src={grey} key={i.toString()} alt='grey'/>)
                }
            })} 
        </div>
    )
}
