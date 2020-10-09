import React, { Component } from 'react'
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

//Import store
import store from './redux/store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path='/' render={(props)=><Home {...props} />} exact />
            <Route path='/login' render ={(props)=><Login {...props} />} />
            <Route path='/signup' render={()=><Signup />} />
            <PrivateRoute path='/counter'>
              <Counter />
            </PrivateRoute>
            <PrivateRoute path='/profile'>
              <Profile />
            </PrivateRoute>
            <Route path='/about' render={()=><About />} />
            <Route path='/episode' render={()=><Episode />} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}
