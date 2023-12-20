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
  
   addNewjob = (job) =>{
    console.log('>>>> check job form parent',job)
    // let currentJobs = this.state.arrJobs
    //     currentJobs.push(job)
        this.setState({
            arrJobs: [...this.state.arrJobs,job]
        // arrJobs:currentJobs
        })
   }
   deleteAJobs = (job) =>{
    let currentJobs = this.state.arrJobs;
    currentJobs = currentJobs.filter(item => item.id !==job.id)
        this.setState({
            arrJobs: currentJobs
        })
   }
      
    render(){
        console.log('>>> call render:',this.state)
        return (
            <>
                <AddComponent
                   addNewjob = {this.addNewjob}
                />

               <ChildComponent 
            
               arr = {this.state.arrJobs}
               deleteAJobs ={this.deleteAJobs}
               />
             
            </>       
        )
    }
}

export default Mycomponent;