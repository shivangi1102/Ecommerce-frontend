import React, {useState} from 'react'
import Base from '../core/Base'
import { Link } from 'react-router-dom'

const Signin = () => {
    const signInForm =() =>{
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
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
    <Base title='Sign In ' description='This is signin for user'>

       {signInForm()}
    
    </Base>
  )
}

export default Signin