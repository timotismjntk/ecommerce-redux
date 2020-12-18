import React, { Component } from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import authAction from "../redux/actions/auth";

class PrivateRoute extends Component {
  render() {
    return (
      <Route render={
        (props) => {
          const childWithProps = React.Children.map(this.props.children, child => {
            if(React.isValidElement(child)){
              return React.cloneElement(child, props)
            }
            return child
          })
          if(this.props.auth.isLogin){
            return childWithProps
          } 
          return (
            <Redirect to={{
              pathname: "/login",
              state: { alert: "Login first!", color: "danger", location: this.props.location.pathname },
            }}
            />
          );
        }
      } />
    )
  }
}

const mapStateToProps = (state) => ({ 
  auth: state.auth 
});

const mapDispatchToProps = {
  setToken: authAction.setToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
