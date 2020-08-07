import React, { Component } from 'react';
import classess from './sectionone.module.css';
import Axios from 'axios';
class SectionOne extends Component{
    constructor(props){

        super(props)
    console.log(this.props.currvid)
    }

    state={
        data:[]
    }


  
    componentDidMount(){

        Axios.get('https://5d76bf96515d1a0014085cf9.mockapi.io/video/')
        .then(response=>{
              
            this.setState({data:response.data[this.props.path]})
            console.log(this.state.data)
        })
        .catch(err=>{
            console.log(err)
        })

    }
    componentDidUpdate(){
        Axios.get('https://5d76bf96515d1a0014085cf9.mockapi.io/video/')
        .then(response=>{
            
            this.setState({data:response.data[this.props.path]})
         
        })
        .catch(err=>{
            console.log(err)
        })

    }
    


    
    render(){
       

  
        return(
            
<div className={classess.SectionOne}>
        <div className={classess.SubSection}>
<iframe className={classess.player} src={`https://player.vimeo.com/video/${this.state.data.vimeoId}`} frameBorder='1' webkitallowfullscreen='' mozallowfullscreen='' allowfullscreen=''></iframe>
</div>
<div className={classess.ViewsSection}>

<div className={classess.UtilsSection}>
   
    <i class="far fa-comment-alt"></i>
    <i class="far fa-bookmark"></i>
     <i class="far fa-heart"></i>
</div>
{this.state.data.views} 
</div>
        <h2 style={{color:"black",marginLeft:10}}>{this.state.data.title}</h2>
        <p style={{marginLeft:10,marginBottom:40}}>{this.state.data.description}</p>
    </div>

            
        )
    }
}
export default SectionOne;