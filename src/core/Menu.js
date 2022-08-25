import React from 'react'
import {Link} from 'react-router-dom'
import { withRouter } from '../withRouter'

const Menu = () => {
  return (
    <div>
        <ul className="nav nav-tabs bg-dark">
            <li className="nav-item">
                <Link className='nav-link' to='/'>
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link className='nav-link' to='/cart'>
                    Cart
                </Link>
            </li>
            <li className="nav-item">
                <Link className='nav-link' to='/'>
                    Dashboard
                </Link>
            </li>
            <li className="nav-item">
                <Link className='nav-link' to='/'>
                    admin dashboard
                </Link>
            </li>
            <li className="nav-item">
                <Link className='nav-link' to='/'>
                    SignIn
                </Link>
            </li>
            <li className="nav-item">
                <Link className='nav-link' to='/'>
                    Signout
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default withRouter(Menu)