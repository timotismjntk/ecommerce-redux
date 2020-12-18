import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'

//Import Component
import PrivateRoute from './component/PrivateRoute'

//Import pages
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Counter from './pages/Counter'
import About from './pages/About'
import Episode from './pages/Episode'
import Profile from './pages/Profile'
import ProductDetail from './pages/ProductDetail'
import NewProduct from './pages/NewProduct'
import ShowByCategory from './pages/Category'
import PopularProduct from './pages/PopularProduct'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import SearchProduct from './pages/SearchProduct'

//Import store
import store from './redux/store'

//import action
import authAction from './redux/actions/auth'
import profileAction from './redux/actions/profile'

export default function App() {
    const dispatch = useDispatch()
    useEffect(()=>{
      if(localStorage.getItem('token')){
        dispatch(authAction.setToken(localStorage.getItem('token')))
      }
    }, [])

    const token = useSelector(state=>state.auth.token)
    useEffect(()=>{
      if (token) {
        dispatch(profileAction.getProfile(token))
      }
    },[token])

    return (
        <>
          <BrowserRouter>
            <Switch>
              <Route path='/' render={(props)=><Home {...props} />} exact />
              <Route path='/login' render ={(props)=><Login {...props} />} />
              <Route path='/signup' render={()=><Signup />} />
              <PrivateRoute path='/counter'>
                <Counter />
              </PrivateRoute>
              <PrivateRoute path='/user/profile'>
                <Profile />
              </PrivateRoute>
              <PrivateRoute path='/user/cart'>
                <Cart />
              </PrivateRoute>
              <PrivateRoute path='/user/checkout'>
                <Checkout />
              </PrivateRoute>
              {/* <Profile /> */}
              <Route path='/product/category' render={(props)=><ShowByCategory {...props}/>} />
              <Route path='/product/detail' render={(props)=><ProductDetail {...props}/>} />
              <Route path='/product/new' render={(props)=><NewProduct {...props}/>} />
              <Route path='/product/popular' render={(props)=><PopularProduct {...props}/>} />
              <Route path='/search/product' render={(props)=><SearchProduct {...props}/>} />
              <Route path='/about' render={()=><About />} />
              <Route path='/episode' render={()=><Episode />} />
              {/* <Route path='/user/cart' render={()=><Cart />} /> */}
            </Switch>
          </BrowserRouter>
        </>
    )
}
