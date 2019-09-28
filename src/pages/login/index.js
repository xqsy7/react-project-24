import React,{Component,Fragment} from "react";
import HeadLogin from "@components/loginRegister/head"
import Body from "@components/loginRegister/body";
class Login extends Component{
    render(){
        return (
            <Fragment>
            <HeadLogin name="登录官网"/>
            <Body/> 
            </Fragment>
        )
    }
}

export default Login;