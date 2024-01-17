import React from "react";
import { withRouter } from "react-router";
import color from "../HOC/color";
import { connect } from "react-redux"; 
class Home extends React.Component{
    componentDidMount(){
        // setTimeout(() =>{
        //     this.props.history.push('/todo')
        // },3000)
    }
    handleDeleteUser = (user) =>{
        console.log('>>>>> check user delete;',user)
        this.props.deleteUserRedux(user);
    }
    handleCreateUser = () =>{
       this.props.addUserRedux();
    }
    render(){
        console.log('>>>check props redux: ',this.props.dataredux)
        let listUser = this.props.dataredux;
        return(
            <>
                <div>
                    Hello world from homepage With (Hieu & tu hoc sang tao)
                </div>
                <div>
                    {listUser && listUser.length >0 &&
                    listUser.map((item,index)=>{
                        return(
                            <div key={item.id}>
                                {index+1} {item.name} 
                                &nbsp; <span onClick={() => this.handleDeleteUser(item)}>X</span>
                            </div>
                        )
                    })
                    }
                    <button onClick={() => this.handleCreateUser()}> Add New </button>
                </div>
            </> 
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        dataredux:state.users
    } 
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({type: 'DELETE_USER',payload: userDelete}),
        addUserRedux: () => dispatch({type: 'CREATE-USER' })

        }
    }

//export default withRouter (Home);
export default connect(mapStateToProps,mapDispatchToProps)( color(Home));