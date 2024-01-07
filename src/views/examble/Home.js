import React from "react";
import { withRouter } from "react-router";
import color from "../HOC/color";
class Home extends React.Component{
    componentDidMount(){
        // setTimeout(() =>{
        //     this.props.history.push('/todo')
        // },3000)
    }
    render(){
        console.log('>>>check props: ',this.props)
        return(
            <div>
                Hello world from homepage With (Hieu & tu hoc sang tao)
            </div>
        )
    }
}
//export default withRouter (Home);
export default color(Home);