import React,{Component,Fragment} from "react";
import HeadLogin from "@components/loginRegister/head"
import Body from "@components/loginRegister/body";
class Login extends Component{
    render(){
        console.log(this.props)
        return (
            <Fragment>
            <HeadLogin name="登录官网"/>
            <Body props = {this.props}/> 
            </Fragment>
        )
    }
}

export default Login;