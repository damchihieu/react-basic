import React from 'react';
//class ChildComponent extends React.Component{
    
      
    // render(){
    //     console.log('>>> check props:',this.props)
    //     // let name = this.props.name;
    //     // let age = this.props.age;

    //     let {name,age,address,arr} = this.props;
    //     let a = '';
    //     return (
    //         <>
               
    //            <div> Child Component name : {name} - {age} - {address}</div>
    //            <div className='job-list'>
    //             {
    //               a=  arr.map((item,index) =>{
    //                     return (
    //                         <div key={item.id}>
    //                             {item.title}- {item.salary}
    //                         </div>
    //                     )
    //                 })
    //             }    
    //            </div>
    //             {console.log('>>>> check map array:',a)}
    //         </>       
    //     )
    // }
//}
const ChildComponent = (props) =>{
        let {arr} = props;
        let a = '';
        return (
            <>
               
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
export default ChildComponent;