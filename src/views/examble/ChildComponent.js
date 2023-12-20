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
    handleOnclickDelete = (job)=>{
        console.log(">>>>> handleOnclickdelete",job)
        this.props.deleteAJobs(job)
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
                                    {item.title}- {item.salary} <></> <span onClick={ () => this.handleOnclickDelete(item)}>X</span>
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