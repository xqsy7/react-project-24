import React,{Component} from "react";
import {PhoneStyle} from "./styled/phone";
import {NavLink} from "react-router-dom";
class MobileAccessories extends Component{
    render(){
        let {mobileAccessories} = this.props;
        return (
            <PhoneStyle>
            <div id="phone-Accessories">
            <div className="phone-Head">
                <span>手机配件</span>
            </div>
            <div className="phone-img">
                <div>
                    <img src="https://resource.smartisan.com/resource/092ccb4ad40c623954fddef7e2ad44d6.png?x-oss-process=image/resize,w_950/format,webp"
                        alt=""></img>
                </div>
            </div>
            <ul className="phone-Accessories-Bottom">
                {
                    mobileAccessories.map((item,index)=>(
                        <li key={index}>
                            <NavLink to={"/details?id="+item.product_info.product_code}>
                            <div>
                                <img src={item.shop_info.ali_image}
                                    alt=""></img>
                            </div>
                            <span>{item.shop_info.title}</span>
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

export default MobileAccessories;