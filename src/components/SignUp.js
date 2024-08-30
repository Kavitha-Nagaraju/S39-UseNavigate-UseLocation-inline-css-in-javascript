import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div>
        <form>
            
            <h1>SignUp</h1>
            <div>
                <label>First Name</label>
                <div></div>
            </div>
            <div>
                <label>Last Name</label>
                <input></input>
            </div>
            <div>
                <label>Mobile Number</label>
                <input></input>
            </div>
            <div>
                <label>Email</label>
                <input></input>
            </div>
            <div>
                <label>Password</label>
                <input></input>
            </div>
            <div>
                <button type="button">SignUp</button>
            </div>
            <div>
                <p>If You have signup before please login now</p>
            </div>
            <div>
                <Link to="/">Login</Link>
            </div>
        </form>
      
    </div>
  )
}

export default SignUp
