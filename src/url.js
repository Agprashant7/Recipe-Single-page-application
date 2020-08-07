import React, { Component } from 'react';
import Axios from 'axios';
class Url extends Component{
    state={
        data:[]
    }
    componentDidMount(){
        Axios.get('https://5d76bf96515d1a0014085cf9.mockapi.io/video/1')
    .then(response=>{
            console.log(response.data)
        this.setState({data:response.data})
    })
    .catch(err=>{
        console.log(err)
    })


    }
    
    render(){
       const Data=this.state.data;
        return(
<div>
    {Data}
</div>


        )
    }




}
export default Url;
