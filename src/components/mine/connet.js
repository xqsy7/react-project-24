import {connect} from "react-redux";
import {FILES_ACTION_ASYNC} from "@actions/user";
const mapStateToProps = (state)=>({
    userId:state.user.userName,
    userPic:state.user.userPic
})


const mapDispatchToProps = (dispatch)=>({
    fileHandler(){
        console.log(this.refs.userPic.files[0])
        let files = this.refs.userPic.files[0];
        let formDate = new FormData();
        formDate.append("userId",sessionStorage.getItem("username"));
        formDate.append("userPic",files);
        dispatch(FILES_ACTION_ASYNC(formDate))
        console.log(sessionStorage.getItem("username"))
    }
})


export default connect(mapStateToProps,mapDispatchToProps);