import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Container } from 'reactstrap'
import {connect} from 'react-redux'
import Navbar from '../component/Navbar'

import authAction from '../redux/actions/auth'

import '../assets/css/ecommerce.css';

const Home = (props) => {
    return (
      <React.Fragment>
        <Navbar />
        <Container className='mt-5 vh-100'>
          <div className="slider-container images d-flex justify-content-between align-items-center position-relative">
            <div className="gambar position-relative">
                <img src={require('../assets/images/1.png')} className="img1 rounded" alt="gambar"/>
                <a href='/'><img src={require('../assets/images/left.png')} className="position-absolute arrow" alt="left"/></a>
            </div>
            <div className="gambar">
                <img src={require('../assets/images/2.png')} className="img2 rounded" alt="gambar"/>
                <span className="position-absolute caption font-weight-bold">Trends in 2020</span>
            </div>
            <div className="gambar position-relative">
                <img src={require('../assets/images/3.png')} className="img3 rounded" alt="gambar"/>
                <a href='/'><img src={require('../assets/images/right.png')} alt="right" className="position-absolute arrow1" /></a>
                <span className="position-absolute caption1 font-weight-bold">Trends in 2020</span>
            </div>
            <div className="gambar">
                <img src={require('../assets/images/4.png')} className="img4 rounded" alt="gambar"/>
            </div>
          </div>
          <div className="indicator">
            <span className="dot font-weight-bold text-secondary">•</span>
            <span className="dot1 font-weight-bold">•</span>
            <span className="dot1 font-weight-bold">•</span>
            <span className="dot1 font-weight-bold">•</span>
            <span className="dot1 font-weight-bold">•</span>
          </div>
          <div className="category mt-4">
              <h3 className="font-weight-bold">Category</h3>
              <span className="detail">What are you currently looking for</span>
          </div>

          <div className="slider-container-dua mt-4 d-flex justify-content-between align-items-center position-relative">
              <div className="item1 column position-relative d-flex justify-content-center align-items-center">
              <img src={require('../assets/images/baju.png')} className="img1 rounded" alt="gambar" />
              <span className="position-absolute caption2 font-weight-bold">T-Shirt</span>
              </div>
              <div className="item2 column d-flex justify-content-center align-items-center">
                  <img src={require('../assets/images/celana-hijau.png')} className="rounded" alt="gambar"/>
                  <span className="position-absolute caption2 font-weight-bold">Shorts</span>
              </div>
              <div className="item3 column d-flex justify-content-center align-items-center">
                  <img src={require('../assets/images/jaket.png')} className="rounded" alt="gambar"/>
                  <span className="position-absolute caption2 font-weight-bold">Jacket</span>
              </div>
              <div className="item4 column d-flex justify-content-center align-items-center">
                  <img src={require('../assets/images/celana-panjang.png')} className="img4 shorts rounded" alt="gambar" />
                  <span className="position-absolute caption2 font-weight-bold">Pants</span>
              </div>
              <div className="item5 column d-flex justify-content-center align-items-center">
                  <img src={require('../assets/images/sepatu.png')} className="img4 rounded" alt="gambar" />
                  <button className="btn btn-default position-absolute rounded-circle btn-arrow3"><img src={require('../assets/images/right.png')} alt="right" /></button>
                  <span className="position-absolute caption2 font-weight-bold">Shoes</span>
              </div>
          </div>

          <div className="category mt-5">
              <h3 className="font-weight-bold">New</h3>
              <span className="detail">What are you currently looking for</span>
          </div>
        </Container>
      </React.Fragment>
    )

}

export default  Home

















// class Home extends Component {
//   componentDidMount(){
//     setTimeout(()=>{
//       this.props.clearMessage()
//     },1000)
//   }
//   render() {
//     const {isError, alertMsg} = this.props.auth
//     return (
//       <>
//         <Navbar />
//         <div className="vh-100 d-flex justify-content-center align-items-center flex-column">
//           <div style={{width: 400}}>
//           <Alert color={isError?'danger':'success'} isOpen={isError || alertMsg!==''}>{alertMsg}</Alert>
//           </div>
//           <h3>Counter</h3>
//           <h1>{this.props.counter.count}</h1>
//           <Link to='/counter'>Go to Counter Page</Link>
//         </div>
//       </>
//     )
//   }
// }

// const mapStateToProps = state => ({counter: state.counter, auth: state.auth})

// const mapDispatchToProps = {
//   clearMessage: authAction.clearMessage
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home)