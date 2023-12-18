import React from 'react';
class ChildComponent extends React.Component{
    state = {
        showjobs: false
    }
    handleShowHide = ()=>{
        this.setState({
            showjobs: !this.state.showjobs
        })
    }
    render(){
        let {arr} = this.props;
        let {showjobs} = this.state;
        let check = showjobs === true ? 'showjobs = true' : 'showjobs = false';
        console.log (">>>> check conditional",check)
        return (
            <>
                {showjobs ===  false ?
                <div>
                    <button onClick={() =>this.handleShowHide()}>Show</button>
                </div> 
               :
                <>
                    <div className='job-list'>
                    {
                    arr.map((item,index) =>{
                    
                        
                            return (
                                <div key={item.id}>
                                    {item.title}- {item.salary} $
                                </div>
                            )
                        })
                    }    
                    </div>
                    <div>
                        <button onClick={() =>this.handleShowHide()}>Hide</button>
                    </div>
                </>
                }
            </>       
        )
    }
}
// const ChildComponent = (props) =>{
//         let {arr} = props;
//         return (
//             <>
//                <div className='job-list'>
//                 {
//                   arr.map((item,index) =>{
//                      if(+item.salary >= 500){
//                             return (
//                                 <div key={item.id}>
//                                     {item.title}- {item.salary} $
//                                 </div>
//                              )

//                         }
//                    })
//                 }    
//                </div>
//             </>       
//         )
// }
export default ChildComponent;