import React, { Component } from "react";
import { MineStyle } from "./mineStyle";
class MineBody extends Component {
    constructor() {
        super();
        this.state = {
            order: [{
                name: "全部订单",
                icon: "\ue607"
            }, {
                name: "代付款",
                icon: "\ue609"
            }, {
                name: "待收货",
                icon: "\ue64c"
            },
            {
                name: "售后",
                icon: "\ue62c"
            }],
            address: ["地址管理", "我的优惠券", "优先购买码", "提货兑换卡"],
            problem: ["常见问题", "服务支持"],
            serve: ["意外碎屏保修服务", "延长保修服务"]
        }
    }
    render() {
        let { order, address, problem, serve } = this.state;
        return (
            <MineStyle>
                <div id="mineBody">
                    <div className="mineBody-Head">
                        <div>
                            <img src="./img/default-user-avatar.png" alt="" />
                            <span>登录/注册</span>
                            <i className="iconfont">&#xe617;</i>
                        </div>
                        <ul>
                            {
                                order.map((item, index) => (
                                    <li key={index}>
                                        <i className="iconfont">{item.icon}</i>
                                        <span>{item.name}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="address">
                        <ul>
                            {
                                address.map((item, index) => (
                                    <li key={index}>
                                        <span>{item}</span>
                                        <i className="iconfont">&#xe617;</i>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="problem">
                        <ul>
                            {
                                problem.map((item, index) => (
                                    <li key={index}>

                                        <span>{item}</span>
                                        <i className="iconfont">&#xe617;</i>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="server">
                        <ul>
                            {
                                serve.map((item, index) => (
                                    <li key={index}>
                                        <span>{item}</span>
                                        <i className="iconfont">&#xe617;</i>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </MineStyle>
        )
    }
}

export default MineBody;