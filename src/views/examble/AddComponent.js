import React from "react";

class AddComponent extends React.Component{
    state = {
        titlejob: '',
        salary: ''
    }
    handleChangeTitleJob = (event) =>{
        this.setState({
            titlejob: event.target.value
        })
    }
    handleChangeSalary = (event)=>{
        this.setState({
            salary: event.target.value
        })
    }
    handleOnClick = (event) =>{
        event.preventDefault()
        console.log(">>> check data input:",this.state)
    }
    render(){
        return(
            <form>
            <label htmlFor="fname">Jobs Title:</label><br/>
            <input 
            type="text" 
            value={this.state.titlejob}
            onChange={(event) => this.handleChangeTitleJob(event)}
            /><br/>
            <label htmlFor="lname">Salary:</label><br/>
            <input 
            type="text" 
            value={this.state.salary}
            onChange={(event)=> this.handleChangeSalary(event)}
            /><br/>
            <input type="submit" 
            onClick={(event) => this.handleOnClick(event)}
            />
       </form> 
        )
    }


}

export default AddComponent;