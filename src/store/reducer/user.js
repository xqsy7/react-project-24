import {handleActions} from "redux-actions";

const defaultState = {
    userName:sessionStorage.getItem("userId") || "",
    userPic:sessionStorage.getItem("userPic") || ''
}

export default handleActions({
    login_action:(state,action)=>{
        let newUserState = Object.assign({},state);
        newUserState.userName = action.payload.info.username;
        newUserState.userPic = action.payload.info.userPic;
        return newUserState;
    },
    files_action:(state,action)=>{
        var newFileState = JSON.parse(JSON.stringify(state));
        newFileState.userPic = action.payload;
        sessionStorage.setItem("userPic",action.payload)
        return newFileState;
    },
    modify_action:(state,action)=>{
        console.log(action)
        var newModifyState = Object.assign({},state);
        newModifyState.userName = action.payload;
        sessionStorage.setItem("username",action.payload)
        return newModifyState;
    }
},defaultState)