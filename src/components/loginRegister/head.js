import React,{Component} from "react";
import {HeadStyle} from "./styled/HeadStyle";
class HeadLogin extends Component{
    render(){
        let {name} = this.props;
         return (
             <HeadStyle>
                <div className="login">{name}</div>
             </HeadStyle>
         )
    }
}

export default HeadLogin;