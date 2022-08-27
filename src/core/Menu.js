import React from 'react'
import { Link , withRouter} from 'react-router-dom'
import { isauthenticate, signout } from '../auth/helper'





const currentTab = (history, path) =>{
    if(history.location.pathname === path){
        return {color: 'green'}
    }
    else{
        return {color: "#ffffff"}
    }
}


const Menu = ({history}) => {
  return (
    <div>
        <ul className="nav nav-tabs bg-dark ">
            <li className="nav-item">
                <Link 
                style={currentTab(history, '/')}
                    className='nav-link ' to='/'>
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link  
                style={currentTab(history, '/cart')}
                className='nav-link' to='/cart'>
                    Cart
                </Link>
            </li>
            <li className="nav-item">
                <Link
                style={currentTab(history, 'user/dashboard')}
                 className='nav-link' to='user/dashboard'>
                    Dashboard
                </Link>
            </li>
            <li className="nav-item">
                <Link 
                style={currentTab(history, '/admin/dashboard')}
                className='nav-link' to='/admin/dashboard'>
                    Admin dashboard
                </Link>
            </li>
            <li className="nav-item">
                <Link
                style={currentTab(history, '/signup')}
                 className='nav-link' to='/signup'>
                    Sign Up
                </Link>
            </li>
            {!isauthenticate() && (
            <li className="nav-item">
                <Link
                style={currentTab(history, '/signin')}
                 className='nav-link' to='/signin'>
                    SignIn
                </Link>
            </li>
            )}
            {isauthenticate() && (
                 <li className="nav-item">
                <span className='nav-link text-warning'
                onClick ={() =>{
                    signout(() => {
                        history.push("/")
                    })
                }}>
                    Signout
                </span>
             </li>
            )}
           
        </ul>
    </div>
  )
}

export default withRouter(Menu)