import React,{Component,Fragment} from "react";
import {HeadStyle} from './styled';
import ClassNav from "@components/classification/classNav";
class CommonHead extends Component{
    constructor(){
        super();
        this.clickHandler = this.clickHandler.bind(this);
        this.closeHandler = this.closeHandler.bind(this);
        this.clickBackHandler = this.clickBackHandler.bind(this);
        this.state = {
            show:false,
        }
    }
    render(){
        let {name,headTop,back} = this.props;
        let {show} = this.state;
        return (
            <Fragment>
            <ClassNav show={show}/>
            <HeadStyle onClick={this.closeHandler}>
            <div id="head">
                <div className="headBox">
                    <div 
                    onClick={this.clickHandler}
                    className="classification-icon" style={{display:headTop?"block":'none'}}>
                        <i className="iconfont">&#xe61a;</i>
                    </div>
                    <div className="back" style={{display:back?"block":"none"}} onClick={this.clickBackHandler}>
                        <span>返回</span>
                    </div>
                    <div className="classification">
                        {name}
                    </div>
                    <div className="seach" style={{display:headTop?"block":'none'}}>
                        <i className="iconfont">&#xe678;</i>
                    </div>
                </div>
            </div>
            </HeadStyle>
            </Fragment>
        )
    }
    clickHandler(e){
        e.stopPropagation();
        this.setState({
            show:true,
        })
    }
    closeHandler(){
        this.setState({
            show:false
        })
    }
    clickBackHandler(){
        this.props.props.history.goBack();
    }
}


export default CommonHead;