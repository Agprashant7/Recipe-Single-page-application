import React,{Component} from 'react';

import classess from './App.module.css';


import {Route,BrowserRouter,Switch,Redirect} from 'react-router-dom'
import Navbar from './Navbar'
import ImgCard from './ImgCards'
import PlayVideo from './playvideo';
import Notound from './Notfound';
import Login from './login';
import Footer from './footer';


class App extends Component{

state={
  userLoggedInStatus:localStorage.getItem('UserLogin') === 'true',
}


onUserLogIn=()=>{

  this.setState({userLoggedInStatus:true});
  }
  
onUserLogOut=()=>{
  localStorage.setItem('UserLogin','false');
  this.setState({userLoggedInStatus:false});
  }

render(){
return (
    <BrowserRouter>
    <div className="App">
    <Navbar LogInStatus={this.state.userLoggedInStatus} onUserLogOut={this.onUserLogOut}/>
    
        <Switch>
        
        <Route exact path='/' render={(routeprops)=>{return <Login {...routeprops} onUserLogIn={this.onUserLogIn} />}}/>
     
        <Route path='/home'component={ImgCard} />
       
        </Switch>
        
<Switch>

<Route  path='/playvideo/:Vid' render={ routeprops=>this.state.userLoggedInStatus? <PlayVideo {...routeprops}/>: <Redirect to='/' />}/>

</Switch>
<Switch>
<Route path='/not-found' component={Notound}/>

</Switch>


      </div>
 
  

  
  </BrowserRouter>
  );
}



}


export default App;
