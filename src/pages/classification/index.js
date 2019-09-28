import React,{Component} from "react";
import {classDate} from "@api/classification";
import CommonHead from "@common/head";
import Phone from "@components/classification/phone.js";
import MobileAccessories from "@components/classification/mobileAccessories.js";
import Shoe from "@components/classification/shoe.js";
import Free from "@components/classification/free.js"

class Classification extends Component{
    constructor(){
        super();
        this.state = {
            head:[],
            mobileAccessories:[],
            shoe:[],
            free:[]
        }
    }
    render(){
        let {head,mobileAccessories,shoe,free} = this.state;
        return (
            <div>
            <CommonHead name={this.props.name} headTop = {this.props.meta.headTop}/>
            <Phone head={head}/>
            <MobileAccessories mobileAccessories={mobileAccessories}/>
            <Shoe shoe={shoe}/>
            <Free free={free}/>
            </div>
        )
    }
    async componentDidMount(){
        let data = await classDate();
        console.log(data);
        let arr = [];
        let arr1 = [];
        let arr2 = [];
        let arr3 = [];
        arr.push(data.data.list[9]);
        arr.push(data.data.list[16]);
        arr1.push(data.data.list[14]);
        arr1.push(data.data.list[4]);
        arr1.push(data.data.list[8]);
        arr1.push(data.data.list[10]);
        arr1.push(data.data.list[13]);
        arr1.push(data.data.list[17]);
        arr2.push(data.data.list[7]);
        arr2.push(data.data.list[5]);
        arr2.push(data.data.list[3]);
        arr2.push(data.data.list[6]);
        arr2.push(data.data.list[11]);
        arr2.push(data.data.list[12]);
        arr3.push(data.data.list[0]);
        arr3.push(data.data.list[1]);
        arr3.push(data.data.list[2]);
        arr3.push(data.data.list[15]);
        this.setState({
            head:arr,
            mobileAccessories:arr1,
            shoe:arr2,
            free:arr3
        })
    }
}

export default Classification;