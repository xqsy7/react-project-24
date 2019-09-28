import http from "@utils/http";

// https://shopapi.smartisan.com/product/spus?ids=1000365
export const DetailsClass = (id)=>http.get("/api/product/spus",{
    ids:id
})