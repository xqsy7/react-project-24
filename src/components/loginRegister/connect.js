import {connect} from "react-redux";
import {LOGIN_ACTION_ASYNC} from "@actions/user";
const mapStateToprops = ()=>({

})


const mapDispathToProps = (dispatch)=>({
    async loginHandler(userId,password,e){
        e.preventDefault();
       let data = await dispatch(LOGIN_ACTION_ASYNC(userId,password));
        if(data){
           if(this.props.props.location.state){
               let path = this.props.props.location.state.from
               this.props.props.history.push(path)
           }else{
               this.props.props.history.push("/home")
           }
        }
    }
})

export default connect(mapStateToprops,mapDispathToProps);