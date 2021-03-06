import React,{Component} from "react";
import {RegisterStyle} from "./styled";
import {Link} from "react-router-dom";
import {registerApi} from "@api/login";
import { Toast } from 'antd-mobile';
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
    }
    render(){
        let {userId,password} = this.state;
        return (
            <RegisterStyle>
                <form action="" onSubmit={this.postUserHandler}>
                    <div className="phone">
                        <input type="text" placeholder="用户名" onFocus={this.writeHandler} value={userId} onChange={this.changeHandler.bind(this,1)}/>
                    </div>
                    <div className="password">
                        <input type="password" placeholder="密码" onFocus={this.writeHandler} value={password} onChange={this.changeHandler.bind(this,2)}/>
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
    changeHandler(num,e){
        let val = e.target.value
        if(num===1){
            this.setState({
                userId:val,
            })
        }else{
            this.setState({
                password:val,
            }) 
        }
        
    }
    async postUserHandler(e){
        e.preventDefault();
        if(!this.state.flag){
            let data = await registerApi(this.state.userId,this.state.password);
            console.log(data);
            if(data.data.code===1){
                successToast();
                this.props.props.history.push("/home");
            }
        }else{
            offline();
        }
        
    }
    
}


function successToast() {
  Toast.success('恭喜您！注册成功', 1);
}

function offline() {
  Toast.offline('请阅读并遵守法律声明和隐私条款 !!!', 2);
}

export default Body;