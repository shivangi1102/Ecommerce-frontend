import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Cart from './core/Cart'
import Signup from './user/Signup'
import Signin from './user/Signin'
import AdminRoutes from './auth/helper/AdminRoutes'
import PrivateRoutes from './auth/helper/PrivateRoutes'
import UserDashBoard from './user/UserDashBoard'
import AdminDashBoard from './user/AdminDashBoard'

const MyRoutes =() => {
    
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/cart' component={Cart}/>
      <Route path='/signup' eact component={Signup}/>
      <Route path='/signin' exact component={Signin}/>
      <PrivateRoutes path='/user/dashboard' exact component={UserDashBoard} />
      <AdminRoutes path='/admin/dashboard' exact component={AdminDashBoard} />
    </Switch>
    </BrowserRouter>
  )
}

export default MyRoutes