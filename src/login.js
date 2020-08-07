import React,{Component}from 'react';
import classess from './Login.module.css';
import Axios from 'axios';
import {Redirect} from 'react-router-dom';


class Login extends Component{
    constructor(props){
        super(props)
       this.state={
        notfound:false,
        unauthorized:false,
        somthing:false
    }

    
    }

   
 
onFormFill=(e)=>{
 e.preventDefault()
  
  const Username=e.target.Uname.value;
  const Password=e.target.Pwd.value;
  console.log(Username);
  console.log(Password);
    


  
  
  console.log("login success")
  localStorage.setItem('UserLogin','true');
  this.props.onUserLogIn();
  this.props.history.push('/home')
  
 

}




    render(){
        console.log(this.props)
    return(
<div className={classess.login}>
<center>
<h2>  Fill  N Explore.....</h2>

</center>

<div className={classess.loginContainer}>
    {this.state.notfound? <Redirect to='/not-found'/>:null}
    {this.state.somthing? <Redirect to='/not-found'/>:null}

    {this.state.unauthorized? <Redirect to='/not-found'/>:null}


<form onSubmit={this.onFormFill}>
        <input ref={this.UserRef} type='text'pattern="[A-Za-z]+" name='Uname' placeholder='name' className={classess.box} required/>
        <p className={classess.nameErr} ref={this.myRef}>Please enter valid name</p>
        <input type='password' pattern="[A-Za-z0-9]+" name='Pwd' placeholder='Password' className={classess.box} required/>
        <input type='Submit' className={ classess.button}/ >

</form>

</div>
</div>
    )
}
}
export default  Login