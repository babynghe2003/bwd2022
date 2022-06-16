import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import auth from '../api-client/auth-helper'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    auth.isAuthenticated() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/auth/login',
        state: { from: props.location }
      }}/>  
    )
  )}/>
)

export default PrivateRoute