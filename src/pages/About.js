import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

export default function About(props){
  const {count} = useSelector(state => state.counter)
  return (
    <div className='vh-100 d-flex justify-content-center align-items-center h1 flex-column'>
      {count}
      <Link className='h5' to='/counter'>Go to Counter</Link>
    </div>
  )
}