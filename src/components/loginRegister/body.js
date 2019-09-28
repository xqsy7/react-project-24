import React,{Component} from "react";
import {BodyStyle} from "./styled/BodyStyle";
import {Link} from "react-router-dom";
class Body extends Component{
    constructor(){
        super();
        this.state = {
            flag:false,
        }
        this.writeHandler = this.writeHandler.bind(this);
        this.clickBacHandler = this.clickBacHandler.bind(this);
    }
    render(){
        return (
            <BodyStyle>
                <form action="">
                    <div className="phone">
                        <input type="text" placeholder="手机号/邮箱" onFocus={this.writeHandler}/>
                    </div>
                    <div className="password">
                        <input type="password" placeholder="密码" onFocus={this.writeHandler}/>
                    </div>
                    <div className="checkbox">
                        <div onClick={this.clickBacHandler}><span>
                        自动登录
                        </span></div>
                        
                        <span className="regiter"><Link to="/register">注册</Link></span>
                        
                        
                        <span className="forget"><Link to="/">忘记密码</Link></span>
                        
                    </div>
                    <div className="login">
                        <button>登录</button>
                        <div className="international">国际手机号登录
                        <i className="iconfont">&#xe617;</i>
                        </div>
                    </div>
                    
                    <div className="Other">
                       <div className="wb">
                       
                       </div>
                       <div className="qq">
                       
                       </div>
                    </div>
                </form>
            </BodyStyle>
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
}

export default Body;