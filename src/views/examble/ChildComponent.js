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

        let {name,age,address,arr} = this.props;
        let a = '';
        return (
            <>
               
               <div> Child Component name : {name} - {age} - {address}</div>
               <div className='job-list'>
                {
                  a=  arr.map((item,index) =>{
                        return (
                            <div key={item.id}>
                                {item.title}- {item.salary}
                            </div>
                        )
                    })
                }    
               </div>
                {console.log('>>>> check map array:',a)}
            </>       
        )
    }
}

export default ChildComponent;