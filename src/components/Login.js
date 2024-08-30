import React, { useRef } from 'react'
import {Link, useNavigate } from 'react-router-dom'

function Login() {
    let navigate = useNavigate();
    let emailInputRef = useRef();
    let passwordInputRef = useRef();
    let msgInputRef = useRef();
  return (
    <div>
        <form>
            <h1>LogIn</h1>
            <div>
                <label>Email</label>
                <input ref={emailInputRef}></input>
            </div>
            <div>
                <label>Password</label>
                <input ref={passwordInputRef}></input>
            </div>
            <div>
                <label>Message</label>
                <input ref={msgInputRef}></input>
            </div>
            <div>
                <button type="button" onClick={()=>{
                    let typeEmail = emailInputRef.current.value;
                    let typePassword = passwordInputRef.current.value;
                    if(typeEmail=="kavitha@gmail.com" && typePassword=="Kavi@123"){
                    navigate("/applicationform",{state:{Message:msgInputRef.current.value}});
                    }
                    else{
                        alert("Invalid Email or Password");
                    }
                }}>Submit</button>
            </div>
            <div>
                <p>If you do not have account please signup now</p>
            </div>
            <Link  to="/signup">SignUp</Link>
        </form>
      
    </div>
  )
}

export default Login
