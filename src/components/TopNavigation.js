import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function TopNavigation() {
  return (
    <div className='navigation'>
        <Link to="/">LogIn</Link>
        <Link to="/signup">SignUp</Link>
        <Link to="/applicationform" style={{backgroundColor:"lightgreen",color:"red"}}>ApplicationForm</Link>
        <br></br>
        <NavLink to="/">LogIn</NavLink>
        <NavLink to="/topnavigation" style={(obj)=>{
                 console.log(obj);
                 if(obj.isActive==true){
                    return{
                        backgroundColor:"blue",
                        color:"white"
                    };
                 }
        }}>TopNavigation</NavLink>
        <NavLink to="/applicationform">ApplicationForm</NavLink>
        <NavLink to="/signup">SignUp</NavLink>
      
    </div>
  )
}

export default TopNavigation
