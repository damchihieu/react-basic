import React from 'react';
import ChildComponent from './ChildComponent';
class Mycomponent extends React.Component{
    state = {
        firstname:'',
        lastname:'',
        arrJobs: [
            {id: 'abcjob1',title:'Developer',salary:'500'},
            {id: 'abcjob2',title:'Textters',salary:'400'},
            {id: 'abcjob3',title:'Project manager',salary:'1000'}
        ]
    }
    handleonchangefirstname = (event) =>{
        this.setState({
            firstname: event.target.value
        })
    }
    handleonchangelastname = (event)=>{
        this.setState({
            lastname: event.target.value
        })
    }
    handleOnClick = (event) =>{
        event.preventDefault()
        console.log(">>> check data",this.state)
    }
      
    render(){
        console.log('>>> call render:',this.state)
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br/>
                    <input 
                    type="text" 
                    value={this.state.firstname}
                    onChange={(event) => this.handleonchangefirstname(event)}
                    /><br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input 
                    type="text" 
                    value={this.state.lastname}
                    onChange={(event)=> this.handleonchangelastname(event)}
                    /><br/>
                    <input type="submit" 
                    onClick={(event) => this.handleOnClick(event)}
                    />
               </form> 
               <ChildComponent 
               name = {this.state.firstname} 
               age = {'25'} 
               address = {'tphcm'}
               arr = {this.state.arrJobs}/>
             
            </>       
        )
    }
}

export default Mycomponent;