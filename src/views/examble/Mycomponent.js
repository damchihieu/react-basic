import React from 'react';
class Mycomponent extends React.Component{
    handleOnchangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    state = {
        name: 'Hieu',
        channel: 'tu hoc sang tao'
    }   
    render(){
      //  let name = 'Hieu';
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
            </>
            
        )
    }
}

export default Mycomponent;