import React from 'react';
class Mycomponent extends React.Component{
    state = {
        firstname:'',
        lastname:''
    }
    handlechanefirst = (event) =>{
        this.setState({
            firstname: event.target.value
        })
    }
    handlechanGelastname = (event)=>{
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
                    onChange={(event) => this.handlechanefirst(event)}
                    /><br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input 
                    type="text" 
                    value={this.state.lastname}
                    onChange={(event)=> this.handlechanGelastname(event)}
                    /><br/>
                    <input type="submit" 
                    onClick={(event) => this.handleOnClick(event)}
                    />
                    
               </form>        
            </>       
        )
    }
}

export default Mycomponent;