import React, { Component } from 'react';
import classess from './ImgCard.module.css';
import Axios from 'axios';
import{Link} from 'react-router-dom';
import Footer from './footer';
import Loader from  './loader'

class ImgCard extends Component{
    state={
        details:[],
        loader:true
    }
componentDidMount(){
    Axios.get('https://5d76bf96515d1a0014085cf9.mockapi.io/playlist')
    .then(response=>{
this.setState({details:response.data,loader:false})
        console.log(this.state.details)
    })
    .catch(err=>{
        console.log(err)
    })
}

    render(){
     
        const arr=this.state.details;
    
        const detailsarr=arr.map((item,pos)=>{
return(  
   <Link to={`/playvideo/${item.id}`}>
   
<div className={classess.CardContainer}>
        
         <div className={classess.ImgContainer}>
             <img src={item.thumbnail} className={classess.imgs} alt='img'/>
<h3>{item.title}</h3>  
         </div>
        
                 </div>
                 </Link>
               
);

            
        })
      
            return(
                <div className={classess.Container}>
{

    this.state.loader?
 <Loader />:

detailsarr
 }
                {/**/}
               
                </div>
                )
    }
      
      
}

export default ImgCard ;