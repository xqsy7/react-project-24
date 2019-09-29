import {connect} from "react-redux";
import {MOIDIFY_ACTION_ASYNC,MODIFYPASSWORD_ACTION_ASYNC} from "@actions/user"
const mapStartToProps = (state)=>({
    userId:state.user.userName,
    userPic:state.user.userPic
})


const mapDispathToProps = (dispatch)=>({
    async getModifyHandler(e){
        e.preventDefault();
        let userName = this.state.userName;
        let data = await dispatch(MOIDIFY_ACTION_ASYNC(userName));
        if(data){
            this.successToast();
        }else{
            this.failToast();
        }
        console.log(data);
    },
    async getModifyPasswordHandler(e){
        e.preventDefault();
        console.log(this.state.password)
        let password = this.state.password;
        let data = await dispatch(MODIFYPASSWORD_ACTION_ASYNC(password));
        if(data){
            this.successToast();
        }else{
            this.failToast();
        }
    },
})


export default connect(mapStartToProps,mapDispathToProps);