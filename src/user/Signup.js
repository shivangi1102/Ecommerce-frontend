import React, {useState} from 'react'
import Base from '../core/Base'
import { Link } from 'react-router-dom'

const Signup = () => {
    const signUpForm =() =>{
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label  className="text-light" >Name</label>
                                <input className="form-control" type="text" />
                        </div>
                        <div className="form-group">
                        <label  className="text-light" >Email</label>
                                <input className="form-control" type="email" />
                        </div>
                        <div className="form-group">
                        <label  className="text-light" >Passowrd</label>
                                <input className="form-control" type="password" />
                        </div>
                        <div className="d-grid mt-3">
                        <button type='button' className="btn btn-success">Submit</button>
                        </div>
                       
                    </form>
                </div>
            </div>
        )
    }
  return (
    <Base title='Sign Up ' description='This is signup for user'>
    <h1>
       SignUp 
       {signUpForm()}
    </h1>
    </Base>
  )
}

export default Signup