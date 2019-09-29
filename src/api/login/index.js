import http from "@utils/http";
import {fetch as fetchPro} from "whatwg-fetch";

export const registerApi = (userId,password)=>http.post("/users/register",{
    userId:userId,
    password:password
})

export const loginApi = (userId,password)=>http.post("/users/login",{
    userId:userId,
    password:password
})

export const filesApi = (formdata)=>{
 return fetchPro("/users/updateUserPic",{
        method:"post",
        body:formdata
      }).then(res=>res.json())
}


export const modifyApi = (userId,username)=>http.post("/users/updateInfo",{
    userId:userId,
    username:username,
})

export const modifyPasswordApi = (userId,password)=>http.post("/users/updateInfo",{
    userId:userId,
    password:password,
})