import React from "react";
import axios from "axios";
import './ListUser.scss'
class ListUser extends React.Component{
    state = {
        ListUsers: []
    }
    async componentDidMount(){
        // axios.get('https://reqres.in/api/users?page=1')
        // .then(res =>{
        //     console.log('>>>> check res :',res.data.data)
        // })
         let res =await axios.get('https://reqres.in/api/users?page=1')
         this.setState({
            ListUsers:res && res.data && res.data.data ? res.data.data : []
         })
    }
    render(){
        let {ListUsers} = this.state;
        return(
            <div className="list-user-container">
                <div className="title">
                    Fetch all list users
                </div>
                <div className="list-user-content">
                    {ListUsers && ListUsers.length >0 &&
                    ListUsers.map((item,index) =>{
                        return(
                            <div className="child">
                            {index}- {item.first_name} {item.last_name}
                        </div>
                        )
                    })
                    }
                   
                    
                </div>
                
            </div>
        )
    }
}
export default ListUser;