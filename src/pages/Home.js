import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Alert} from 'reactstrap'
import {connect} from 'react-redux'
import Navbar from '../component/Navbar'

import authAction from '../redux/actions/auth'

class Home extends Component {
  componentDidMount(){
    setTimeout(()=>{
      this.props.clearMessage()
    },1000)
  }
  render() {
    const {isError, alertMsg} = this.props.auth
    return (
      <>
        <Navbar />
        <div className="vh-100 d-flex justify-content-center align-items-center flex-column">
          <div style={{width: 400}}>
          <Alert color={isError?'danger':'success'} isOpen={isError || alertMsg!==''}>{alertMsg}</Alert>
          </div>
          <h3>Counter</h3>
          <h1>{this.props.counter.count}</h1>
          <Link to='/counter'>Go to Counter Page</Link>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({counter: state.counter, auth: state.auth})

const mapDispatchToProps = {
  clearMessage: authAction.clearMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)