import React, { Component } from "react";
import Head from "@components/loginRegister/head";
import { ModifyStyle } from "./styled";
import Cookies from "js-cookie";
import { Modal, List, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';
import connect from "./connect";
@connect
class ModifyMine extends Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            password: ""
        }
    }
    render() {
        let { userName, password } = this.state;
        return (
            <ModifyStyle>
                <Head name={this.props.name} back="true" props={this.props} />
                <div className="mineBody-Head">
                    <div className="modify">
                        <div className="img">
                            <img src={this.props.userPic} alt="头像" />
                        </div>
                        <input type="file" ref="userPic" />
                        <div className="input" onClick={this.clickHandler}>
                            <span>{this.props.userId ? this.props.userId : "登录/注册"}</span>
                            <i className="iconfont">&#xe607;</i>
                        </div>
                    </div>
                    <form action="" onSubmit={this.props.getModifyHandler.bind(this)}>
                        <div className="modify_b">
                            <input type="text" placeholder="需要修改的昵称" ref="modify" value={userName} onChange={this.changeHandler.bind(this, 1)} />
                        </div>
                        <button>确定修改</button>
                    </form>
                    <Button onClick={this.showModal('modal2')} className="passwordModify">修改密码</Button>
                    <Modal
                        popup
                        visible={this.state.modal2}
                        onClose={this.onClose('modal2')}
                        animationType="slide-up"
                        
                    >
                        <List style={{bottom:"2rem"}} renderHeader={() => <div>修改密码</div>} className="popup-list">
                            <List.Item>
                                <input className="inputPassword" style={{width:"6.5rem",height:".6rem",outline:"0",borderRadius:"6px 6px 0 0",border:"0"}} type="password" placeholder="修改密码" value={password} onChange={this.changeHandler.bind(this,2)}/>
                            </List.Item>
                            <List.Item>
                                <Button type="primary" onClick={this.props.getModifyPasswordHandler.bind(this)}>确认修改</Button>
                            </List.Item>
                        </List>
                    </Modal>
                    <button className="backLogin" onClick={this.clickDHandler.bind(this)}>退出登录</button>
                </div>
            </ModifyStyle>
        )
    }
    changeHandler(num, e) {
        let val = e.target.value;
        if (num === 1) {
            e.target.style.color = "black";
            this.setState({
                userName: val
            })
        } else {
            e.target.style.color = "black";
            this.setState({
                password: val
            })
        }
    }
    failToast() {
        Toast.fail('修改失败', 1);
      }
    successToast() {
        Toast.success('修改成功', 1);
        this.refs.modify.value = "";
      }
    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
            [key]: true,
        });
    }
    onClose = key => () => {
        this.setState({
            [key]: false,
        });
    }
    clickDHandler(){
        console.log(this.props)
        Cookies.remove("token");
        this.props.history.push("/home");
    }
}

export default ModifyMine;