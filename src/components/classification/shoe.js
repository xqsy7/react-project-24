import React,{Component} from "react";
import {PhoneStyle} from "./styled/phone";
import {NavLink} from "react-router-dom";
class Shoe extends Component{
    render(){
        let {shoe} = this.props;
        return (
            <PhoneStyle>
            <div id="shoe-clothes">
        <div className="phone-Head">
            <span>鞋服</span>
        </div>
        <div className="phone-img">
            <div>
                <img src="https://resource.smartisan.com/resource/790e2855df8a62dfbabea0130a3fdacf.png?x-oss-process=image/resize,w_950/format,webp"
                    alt=""></img>
            </div>
        </div>
        <ul className="phone-Accessories-Bottom">
            {
                shoe.map((item,index)=>(
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

export default Shoe;