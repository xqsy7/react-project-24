import React,{Component} from "react";
import {PhoneStyle} from "./styled/phone";
import {NavLink} from "react-router-dom";
class Free extends Component{
    
    render(){
        let {free} = this.props;
        return (
            <PhoneStyle>
            <div id="purifier" className="free">
        <div className="phone-Head">
            <span>畅呼吸</span>
        </div>
        <div className="phone-img">
            <div>
                <img src="https://resource.smartisan.com/resource/29fd5d173a80c5023861e38c69cf9b7a.png?x-oss-process=image/resize,w_950/format,webp"
                    alt=""></img>
            </div>
        </div>
        <ul>
            {
                free.map((item,index)=>(
                    <li key={index}>
                        <NavLink to={"/details?id="+item.product_info.product_code}>
                        <img src={item.shop_info.ali_image}
                            alt=""></img>
                        <span>{item.shop_info.title}</span>
                        <i className="iconfont">&#xe617;</i>
                        </NavLink>
                    </li>
                ))
            }
        </ul>
    </div>
    </PhoneStyle>
        )
    }
}

export default Free;