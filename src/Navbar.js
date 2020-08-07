import React from 'react'
import{Link} from 'react-router-dom'
import classess from'./Navbar.module.css';
const Navbar=(props)=>{
    console.log(props)
    


    return(
        <div className={classess.topBar}>
        <center>
            <Link to='/home'>
            <span>Home</span></Link>

            {props.LogInStatus?
            
             <Link onClick={props.onUserLogOut} to='/'><span>Logout</span></Link>:
            <Link to='/'>
            <span>Login</span>
            </Link>
            }
            </center>
 
      </div>

    )
}

export default Navbar;