import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Cart from './core/Cart'
import Signup from './user/Signup'
import Signin from './user/Signin'

const MyRoutes =() => {
    
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/cart' component={Cart}/>
      <Route path='/signup' eact component={Signup}/>
      <Route path='/signin' exact component={Signin}/>
    </Switch>
    </BrowserRouter>
  )
}

export default MyRoutes