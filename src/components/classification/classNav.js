import React,{Component} from "react";
import {NavStyle} from "./styled/navStyle";
class ClassNav extends Component{
    constructor(){
        super();
        this.state = {
            iconList:[
                {
                    name:"锤子商城",
                    icon:"\ue6ab"
                },
                {
                    name:"坚果  Pro  2S",
                    icon:"\ue506"
                },
                {
                    name:"坚果  R1",
                    icon:"\ue616"
                },
                {
                    name:"坚果  TNT  工作站",
                    icon:"\ue60b"
                },
                {
                    name:"坚果 3",
                    icon:"\ue66d"
                },
                {
                    name:"Smartisan OS",
                    icon:"\ue504"
                },
                {
                    name:"应用",
                    icon:"\ue501"
                },
                {
                    name:"论坛",
                    icon:"\ue505"
                },
                {
                    name:"服务支持",
                    icon:"\ue60a"
                },
                {},
                {},
                {}
            ],
        }
    }
    render(){
        let {iconList} = this.state;
        let {show} = this.props;
        return (
            <NavStyle style={{zIndex:show?'9':'-1',background:show?'black':""}}>
            <div>
                <ul>
                    {
                        iconList.map((item,index)=>(
                            <li key={index}>
                            <i className="iconfont">{item.icon}</i>
                            <span>{item.name}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
            </NavStyle>
        )
    }
}

export default ClassNav;