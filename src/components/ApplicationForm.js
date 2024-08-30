import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function ApplicationForm() {
    let locObj = useLocation();
  return (
    <div>
        <form>
            <h1>ApplicationForm</h1>
            <div>
                <label>First Name</label>
                <input></input>
            </div>
            <div>
                <label>Last Name</label>
                <input></input>
            </div>
            <div>
                <label>Email</label>
                <input type="email"></input>
            </div>
            <div>
                <label>Password</label>
                <input type="password"></input>
            </div>
            <div>
                <label>Mobile Number</label>
                <input ></input>
            </div>
            
            <div>
                 
                <label>Education</label>
                
                <select>
                    <optgroup label="B.tech"> </optgroup>
                        <option>CSE</option>
                        <option>ECE</option>
                        <option>EEE</option>
                   <optgroup label="Masters"></optgroup>
                   <option>Arts</option>
                   <option>Project management</option>
                </select>
              
             
            </div>
           
            <div>
                <label>Gender</label>
                <input type="radio" name="female" className='check'></input>
                <label className='application'>Female</label>
                <input type="radio" name="female" className='check'></input>
                <label className='application'>Male</label>
            </div>
            <div>
                <label>Hobbies</label>
                <input type="checkbox" className='check'></input>
                <label className='application'>Listening Music</label>
                <input type="checkbox" className='check'></input>
                <label className='application'>PlayingChess</label>
                
               
            </div>
            <div>
                <label>State</label>
                <input list="state"></input>
                <datalist id="state">
                    <option>Telangana</option>
                    <option>Maharastra</option>
                    <option>Tamilnadu</option>
                    <option>AndhraPradhesh</option>
                </datalist>
                
            </div>
            <div>
                <label>Date of Birth</label>
                <input type="datetime-local"></input>
            </div>
            <div>
            <h2>Message:{locObj && locObj.state && locObj.state.msg?locObj.state.msg:"hi,welcome"}</h2>
            </div>
            <div>
                <button type="button">Submit</button>
            </div>
            <div>
              <Link to="/topnavigation">TopNavigation</Link>
            </div>
        </form>
      
    </div>
  )
}

export default ApplicationForm
