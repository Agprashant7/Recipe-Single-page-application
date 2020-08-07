import React, { Component } from 'react';
import Axios from 'axios';
import classess from './playvideo.module.css';
import SectionTwo from './sectiontwo';
import SectionOne from './sectionone';
import Footer from './footer';

class PlayVideo extends Component{
    state={
        currvid:'0',
          
    PathId: this .props.match.params.Vid
    }
    Curvid=(pos)=>{
     this.setState({PathId:pos})
        
        
    };

  
    componentDidMount(){
const  PathId= this .props.match.params.Vid;
if (PathId!== null && PathId!== undefined && PathId!== '' && parseInt(PathId>0)){        
        Axios.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/video/${this.PathId}`)
    .then(response=>{
            
        console.log(response.data)
        this.setState({currvid:response.data.id})
    })
    .catch(err=>{
        console.log(err)
    })
}
    }
    
   
    render(){
      
  
        return(
            <div>
<div className={classess.MainContainer}>

    <SectionOne currvid={this.state.currvid}  path={this.state.PathId} />
  <SectionTwo Curvid={this.Curvid}  />

</div>
<Footer />
</div>



        )
    }
}
export default PlayVideo ;