import React,{Component} from "react";
import Head from "@common/head";
import MineBody from "@components/mine";
class Mine extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>
            <Head name={this.props.name} headTop={this.props.meta.headTop}/>
            <MineBody props={this.props}/>
            </div>
        )
    }
}

export default Mine;