import React from 'react';
class Mycomponent extends React.Component{
    state = {
        name: '',
        channel: 'tu hoc sang tao'
    }
    handleOnchangeName = (event) => {
     //   console.log(event.target.value,'event target:',event.target,'event object:',event)
        this.setState({
            name: event.target.value,
            channel: 'abc'
        })
    }
    handleClickButon = () =>{
        alert("click me")
    }
      
    render(){
        console.log('>>> call render:',this.state)
        return (
            <>
                <div className='first'>
                    <input value={this.state.name} type ="text" 
                        onChange = {(event) => this.handleOnchangeName(event)}/>
                     Hello my name: {this.state.name}
                 </div>
                 <div className='second'>
                    kenh channal: {this.state.channel}
                 </div>
                 <div className='third'>
                    <button onClick={() =>this.handleClickButon()}>click me</button>

                 </div>
            </>
            
        )
    }
}

export default Mycomponent;