import React, { Component } from 'react'
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import counter from '../redux/actions/counter'
import auth from '../redux/actions/auth'

class Counter extends Component {
  logout = (e)=>{
    e.preventDefault()
    this.props.logout()
  }
  
  
  render() {
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center flex-column position-relative">
        <div className='position-absolute' style={{top:10, right: 10}}>
          <Link to='/logout' onClick={this.logout}>Logout</Link>
        </div>
        <h3>Counter</h3>
        <h1>{this.props.penghitung.count}</h1>
        <div>
          <Button onClick={this.props.decrease} >-</Button>
          {' '}
          <Button onClick={this.props.increase}>+</Button>
        </div>
        <Link to='/'>Go to Home Page</Link>
        <Link to='/about'>Go to About</Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({penghitung: state.counter})

const mapDispatchToProps = {
  logout: auth.logout,
  decrease: counter.decreaseCount,
  increase: counter.increaseCount
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)