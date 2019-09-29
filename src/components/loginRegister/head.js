import React,{Component} from "react";
import {HeadStyle} from "./styled/HeadStyle";
class HeadLogin extends Component{
    constructor(){
        super();
        this.clickBackHandler = this.clickBackHandler.bind(this)
    }
    render(){
        let {name,back} = this.props;
         return (
             <HeadStyle>
                <div className="back" style={{display:back?"block":"none"}} onClick={this.clickBackHandler}>
                        <span>返回</span>
                </div>
                <div className="login">{name}</div>
             </HeadStyle>
         )
    }
    clickBackHandler(){
        this.props.props.history.goBack();
    }
}

export default HeadLogin;