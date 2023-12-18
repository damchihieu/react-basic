import React from 'react';
import ChildComponent from './ChildComponent';
class Mycomponent extends React.Component{
    state = {
        firstname:'',
        lastname:''
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
               <ChildComponent name = {"Hieu"} age = {'25'}/>
             
            </>       
        )
    }
}

export default Mycomponent;