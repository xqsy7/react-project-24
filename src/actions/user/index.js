import {createAction} from "redux-actions";
import {modifyApi,modifyPasswordApi} from "@api/login";
import {loginApi,filesApi} from "@api/login";

let LOGIN_ACTION = createAction("login_action",data=>data);

export const LOGIN_ACTION_ASYNC = (userId,password)=>{
    return async(dispatch)=>{
        let data = await loginApi(userId,password);
        if(data.data.code===1){
            sessionStorage.setItem("username",data.data.info.username);
            sessionStorage.setItem("userId",userId);
            sessionStorage.setItem("userPic",data.data.info.userPic);
            dispatch(LOGIN_ACTION(data.data));
            return true;
        }
        
    }
} 

let FILES_ACTION = createAction("files_action",imgUrl=>imgUrl)
export const FILES_ACTION_ASYNC = (formdate)=>{
    return async(dispatch)=>{
        let data = await filesApi(formdate);
        if(data.data.urlPic){
            dispatch(FILES_ACTION(data.data.urlPic));
        }
    }
}

let MODIFY_ACTION = createAction("modify_action")
export const MOIDIFY_ACTION_ASYNC = (userName)=>{
    // console.log(userName);
    console.log(sessionStorage.getItem("username"));
    let userId = sessionStorage.getItem("username");
    return async(dispatch)=>{
        let data = await modifyApi(userId,userName);
        if(data.data.info.username){
            dispatch(MODIFY_ACTION(data.data.info.username));
            return true;
        }
    }
}

let MODIFYPASSWORD_ACTION = createAction("modifypassword_action")

export const MODIFYPASSWORD_ACTION_ASYNC = (password)=>{
    let userId = sessionStorage.getItem("username");
    return async(dispatch)=>{
        let data = await modifyPasswordApi(userId,password);
        console.log(data);
        if(data.data.info.msg){
            dispatch(MODIFYPASSWORD_ACTION())
            return true;
        }
        
    }
}