import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// import {Link} from 'react-router-dom'
import { Container } from 'reactstrap'
// import {connect} from 'react-redux'
import Navbar from '../component/Navbar'
import Newproduct from '../component/NewProduct'
import PopularProduct from '../component/PopularProduct'
import CategoryProduct from '../component/CategoryProduct'

// import authAction from '../redux/actions/auth'
import profileAction from '../redux/actions/profile'

import '../assets/css/ecommerce.css';

const Home = (props) => {

  const token = useSelector(state=>state.auth.token)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    if (token) {
      dispatch(profileAction.getProfile(token))
    }
  },[token])

    return (
      <React.Fragment>
        <Navbar />
        <Container className='mt-5 vh-100'>
          <div className="slider-container images d-flex justify-content-between align-items-center position-relative">
            <div className="gambar position-relative">
                <img src={require('../assets/images/1.png')} className="img1 rounded" alt="gambar"/>
                <img src={require('../assets/images/left.png')} className="position-absolute arrow" alt="left"/>
            </div>
            <div className="gambar">
                <img src={require('../assets/images/2.png')} className="img2 rounded" alt="gambar"/>
                <span className="position-absolute caption font-weight-bold">Trends in 2020</span>
            </div>
            <div className="gambar position-relative">
                <img src={require('../assets/images/3.png')} className="img3 rounded" alt="gambar"/>
                <img src={require('../assets/images/right.png')} alt="right" className="position-absolute arrow1" />
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
          <div className='slider-container-dua mt-4 d-flex flex-row' style={{overflowX:'scroll'}}>
            <CategoryProduct />
          </div>
          <button className="btn btn-default position-absolute rounded-circle btn-arrow3 bg-yellow"><img src={require('../assets/images/right.png')} alt="right" /></button>

          <div className="category mt-5 mb-4">
              <h3 className="font-weight-bold">New</h3>
              <span className="detail">What are you currently looking for</span>
          </div>
          <Newproduct />

          <div className="category mt-5 mb-4">
              <h2 className="font-weight-bold">Popular</h2>
              <span className="detail">Find clothes that are trending recently</span>
          </div>

          <PopularProduct />      
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