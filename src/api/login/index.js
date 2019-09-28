import http from "@utils/http";

export const registerApi = (userId,password)=>http.post("/users/register",{
    userId:userId,
    password:password
})