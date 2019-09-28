import styled from "styled-components";

export const TabBarWrapper = styled.div`
    width:100%;
    height:1.14rem;
    position:fixed;
    left:0;
    bottom:0;
    background:#fff;
    border-top:1px solid #ccc;
    ul{
        width:86%;
        margin:0 auto;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    li{
        width:100%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    a{
        display:flex;
       width:100%;
       height:100%;
       flex-direction:column;
       justify-content:center;
       align-items:center; 
       font-size:.2rem;
    }
    span{
        margin-top:.05rem;
        font-weight:700;
        color:#9a9a9a;
    }
    i{
        color:#9a9a9a;
        font-size:.4rem;
    }
    .active{
        color:#d44d44;
    }
    .active .iconfont-active{
        font-size:.5rem;
        color:#d44d44;
    }
    .active span{
        font-size:.25rem;
        color:#d44d44;
    }
`