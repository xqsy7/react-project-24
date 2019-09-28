import React,{Component} from "react";
import {PhoneStyle} from "./styled/phone";
import {Link} from "react-router-dom";
class Phone extends Component{
    render(){
        let {head} = this.props;
        return (
            <PhoneStyle>
            <div id="phone">
        <div className="phone-Head">
            <span>手机</span>
        </div>
        <div className="phone-img">
            <div>
                <img src="https://resource.smartisan.com/resource/b1d887c9246cee3a8ba7a7a7c57d5a50.png?x-oss-process=image/resize,w_950/format,webp"
                    alt=""></img>
            </div>
        </div>
        <ul className="phone-bottom">
            {
                head.map((item,index)=>{
                    return (
                        <li key={index}>
                        <Link to={"/details?id="+item.product_info.product_code}>
                            <div>
                                <img src={item.shop_info.ali_image}
                                    alt=""></img>
                                <span>{item.shop_info.title}
                                </span>
                            </div>
                            <i className="iconfont">&#xe617;</i>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    </div>
    </PhoneStyle>
        )
    }
}

export default Phone;