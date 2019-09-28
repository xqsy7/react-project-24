import React,{Component} from "react";
import Head from "@common/head";
import MineBody from "@components/mine";
import http from "@utils/http";
class Mine extends Component{
    constructor(){
        super();
    }
    render(){
        console.log(this.props)
        return (
            <div>
            <Head name={this.props.name} headTop={this.props.meta.headTop}/>
            <MineBody/>
            </div>
        )
    }
    // componentDidMount(){
    //     http.post("/users/register",{
    //         userId:"abc123",
    //         password:"asdasd"
    //     }
    //     ).then((data)=>{
    //         console.log(data);
    //     })
    // }
}

export default Mine;