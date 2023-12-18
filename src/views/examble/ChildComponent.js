import React from 'react';
class ChildComponent extends React.Component{
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
        console.log(">>> check data input",this.state)
    }
      
    render(){
        console.log('>>> check props:',this.props)
        // let name = this.props.name;
        // let age = this.props.age;

        let {name,age} = this.props;
        return (
            <>
               
               <div> Child Component name:, {name} - {age}</div>
             
            </>       
        )
    }
}

export default ChildComponent;