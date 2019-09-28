import React,{Component} from "react";
import {ShopStyle} from "./styleShop";
class Shop extends Component{
    render(){
        let {shopList} = this.props;
        console.log(shopList.shop_info);
        let price = shopList.price;
        price = price+"";
        let num = price.slice(0,1);
        price = num+ price.replace(num,",")
        return (
            <ShopStyle>
                <ul className="shop">
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
                            <p ><span>容量:</span><span className="weight">{shopList.shop_info?shopList.shop_info.spec_v2[1]?shopList.shop_info.spec_v2[1].spec_values[1].item_value:shopList.shop_info.highlights:''}</span></p>
                            <p><span>数量:</span><span className="weight">{shopList.shop_info?shopList.shop_info.commission_type:''}</span></p>
                        </div>
                    </div>
                </div>

                <div className="details_shop">
                    <div>商品详情</div>
                    <img src={shopList.shop_info?shopList.shop_info.tpl_content.base.images.ali.url?shopList.shop_info.tpl_content.base.images.ali.url:shopList.shop_info.tpl_content.base.images.ali_mobile.url:''} alt=""/>
                </div>

                <div className="parameter">
                    <div>技术参数</div>
                    <img src={shopList.shop_info?shopList.shop_info.tpl_content.base.images.ali_mobile.url?shopList.shop_info.tpl_content.base.images.ali_mobile.url:'spec_params.':''} alt=""/>
                </div>
            </ShopStyle>
        )
    }
}

export default Shop;