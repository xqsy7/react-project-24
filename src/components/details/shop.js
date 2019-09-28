import React,{Component} from "react";
import {ShopStyle} from "./styleShop";
import Observer from "@/observer.js";
class Shop extends Component{
    render(){
        let {shopList} = this.props;
        console.log(shopList.shop_info);
        let price = shopList.price;
        price = price+"";
        let num = price.slice(0,1);
        price = num+ price.replace(num,",")
        return (
            <ShopStyle ref="dong">
                <ul className="shop" ref="shop">
                    <li>
                        <img src={shopList.sku_info?shopList.sku_info[0].ali_image:''} alt=""/>
                    </li>
                </ul>
                <div className="beijing"></div>
                <div className="shopdate">
                    <div className="shopdata_child">
                        <h4>{shopList.name}</h4>
                        <p>{shopList.shop_info?shopList.shop_info.spu_mobile_sub_title:''}</p>
                        <div>
                            <div>
                            <i>￥</i>
                            <span>{price+".00"}</span>
                            </div>
                            <p>满150元包邮</p>
                        </div>
                    </div>
                </div>

                <div className="choose">
                    <div className="choose_child">
                        <h6>已选版本</h6>
                        <div>
                            <p>
                                <span>颜色:</span>
                                <span className="weight">{shopList.shop_info?shopList.shop_info.spec_v2[0].spec_values[0].item_value:''}</span>
                            </p>
                            <p style={{display:shopList.shop_info?shopList.shop_info.spec_v2[1]?"block":'none':""}}><span>{shopList.shop_info?shopList.shop_info.spec_v2[1]?shopList.shop_info.spec_v2[1].spec_name:'':''}:</span><span className="weight">{shopList.shop_info?shopList.shop_info.spec_v2[1]?shopList.shop_info.spec_v2[1].spec_values[1]?shopList.shop_info.spec_v2[1].spec_values[1].item_value:shopList.shop_info.spec_v2[1].spec_values[0].item_value:"":''}</span></p>
                            <p><span>数量:</span><span className="weight">{shopList.shop_info?shopList.shop_info.commission_type:''}</span></p>
                        </div>
                    </div>
                </div>

                <div className="details_shop" ref="details_shop">
                    <div>商品详情</div>
                    <img src={shopList.shop_info?shopList.shop_info.tpl_content.base.images.ali.url?shopList.shop_info.tpl_content.base.images.ali.url:shopList.shop_info.tpl_content.base.images.ali_mobile.url:''} alt=""/>
                </div>

                <div className="parameter" ref="parameter">
                    <div>技术参数</div>
                    <img src={shopList.shop_info?shopList.shop_info.tpl_content.base.images.ali_mobile.url?shopList.shop_info.tpl_content.base.images.ali_mobile.url:'spec_params.':''} alt=""/>
                </div>

                <div className="shoppingCar">
                    <div style={{display:shopList.shop_info?shopList.shop_info.merchant_id===2?"blcok":"none":''}} className="noShop">
                        到货通知
                    </div>
                    <div className="getShop" style={{display:shopList.shop_info?shopList.shop_info.merchant_id===1?"blcok":"none":''}}>
                        <i className="iconfont">&#xe6ab;</i>
                        <div className="getNow">现在购买</div>
                        <div className="getCar">加入购物车</div>
                    </div>
                </div>
            </ShopStyle>
        )
    }
    componentDidMount(){
        Observer.$on("getClickHandler",()=>{
            this.refs.dong.scrollTop = -1000;
            Observer.$emit("getTopHandler",this.refs.shop.offsetTop);
        })
    }
}

export default Shop;