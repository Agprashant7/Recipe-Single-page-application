import React, { Component } from 'react';
import classess from './sectiontwo.module.css';
import Axios from 'axios';

class SectionTwo extends Component{
    constructor(props){
        super(props)
    
    }
    state={
        data:[]
    }
    componentDidMount(){
        Axios.get('https://5d76bf96515d1a0014085cf9.mockapi.io/playlist/')
    .then(response=>{
            
        this.setState({data:response.data})
    })
    .catch(err=>{
        console.log(err)
    })
 

    }
render(){
  
    const arr1=this.state.data;
 
   const arr2=arr1.map((item,pos)=>{
   
return(
    
  
    <div className={classess.PlayListContainer}>
        
    <div className={classess.Thumbnail}>
    <img src={item.thumbnail} className={classess.Pic} onClick={()=>{this.props.Curvid(pos)}} / >
<h3>{item.title}</h3>

    </div>

    
        </div>
       
)
console.log(arr2)
   })
        return(
            <div className={classess.SectionTwo}>
    {arr2}
</div>
           
        )
    
   
   }
}
export default SectionTwo;