import React, { Component } from "react";
import Head from "@common/head";
import Shop from "@components/details/shop";
import url from "url";
import {DetailsClass} from "@api/details"
import {DetailStyle} from "./detailStyle";
import Observer from "@/observer";
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headList: ["商品", "详情", "参数", "推荐"],
            name:"",
            shopList:{}
        }
        this.clickHandler = this.clickHandler.bind();
    }
    render() {
        console.log(this.props.location)
        this.data = url.parse(this.props.location.search,true).query;
        let { headList,name,shopList } = this.state
        return (
            <DetailStyle>
                <Head name={name} back="true" props = {this.props}/>
                <ul className="ulList">
                    {
                        headList.map((item, index) => (
                            <li key={index} onClick = {this.clickHandler}>
                                {item}
                            </li>
                        ))
                    }
                </ul>
                <Shop shopList={shopList}/>
            </DetailStyle>
        )
    }
    async componentDidMount(){
       let data = await DetailsClass(this.data.id);
       console.log(data.data.list[0].after_sell_info.name?data.data.list[0].after_sell_info.name:'')
       console.log(data.data.list[0]);
       if(data){
        this.setState({
            name:data.data.list[0].name,
            shopList:data.data.list[0]
        })
       }


       Observer.$on("getTopHandler",(top)=>{
           console.log(top);
       })
    }
    clickHandler(e){
        Observer.$emit("getClickHandler");
    }
}


export default Details;