import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
class Mycomponent extends React.Component{
    state = {
        arrJobs: [
            {id: 'abcjob1',title:'Developer',salary:'500'},
            {id: 'abcjob2',title:'Textters',salary:'400'},
            {id: 'abcjob3',title:'Project manager',salary:'1000'}
        ]
    }
  
   
      
    render(){
        console.log('>>> call render:',this.state)
        return (
            <>
                <AddComponent/>

               <ChildComponent 
            
               arr = {this.state.arrJobs}/>
             
            </>       
        )
    }
}

export default Mycomponent;