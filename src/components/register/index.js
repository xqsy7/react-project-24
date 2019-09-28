import React,{Component} from "react";
import {RegisterStyle} from "./styled";
import {Link} from "react-router-dom";
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
class Body extends Component{
    constructor(){
        super();
        this.state = {
            flag:true,
            userId:"",
            password:"",
        }
        this.writeHandler = this.writeHandler.bind(this);
        this.clickBacHandler = this.clickBacHandler.bind(this);
        this.postUserHandler = this.postUserHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }
    render(){
        return (
            <RegisterStyle>
                <form action="" onSubmit={this.postUserHandler}>
                    <div className="phone">
                        <input type="text" placeholder="用户名" onFocus={this.writeHandler} value={userId} onChange={this.changeHandler}/>
                    </div>
                    <div className="password">
                        <input type="password" placeholder="密码" onFocus={this.writeHandler} value={password} onChange={this.changeHandler}/>
                    </div>
                    <div className="checkbox">
                        <div onClick={this.clickBacHandler}><span>
                        </span></div>
                        
                        <p>
                        我已阅读并同意遵守
                        <a href="https://www.smartisan.com/support/#/other-service/agreement">
                        法律声明</a>
                        和
                        <a href="https://www.smartisan.com/support/#/other-service/privacy">隐私条款</a>
                        
                        </p>
                        
                    </div>
                    <div className="login">
                        <button>注册</button>
                    </div>
                    
                    <div className="Other">
                    <p>
                    如果您已拥有 Smartisan ID，则可在此
                        <Link to="/login">登录</Link>
                    </p>
                    </div>
                </form>
                <WingBlank>
                    <WhiteSpace />
                    <Button onClick={showToast}>text only</Button>
                    <WhiteSpace />
                </WingBlank>
            </RegisterStyle>
        )
    }
    writeHandler(e){
        e.target.style.color = "black";
    }
    clickBacHandler(e){
        if(this.state.flag){
            e.target.style.backgroundPositionY = 0+'px';
        }else{
            e.target.style.backgroundPositionY = -25+"px"; 
        }
        this.setState({
            flag:!this.state.flag
        })
    }
    changeHandler(){
        
    }
    postUserHandler(e){
        e.preventDefault();

    }
    
}

function showToast() {
    Toast.info('This is a toast tips !!!', 1);
}

export default Body;