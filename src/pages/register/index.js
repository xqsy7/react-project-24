import React,{Component} from "react";
import HeadLogin from "@components/loginRegister/head"
import Body from "@components/register";
class Register extends Component{
    render(){
        return (
            <div>
            <HeadLogin name="注册 Smartison ID" />
            <Body props = {this.props}/>
            Register 
            </div>
        )
    }
}

export default Register;