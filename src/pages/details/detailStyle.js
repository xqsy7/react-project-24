import styled from "styled-components";

export const DetailStyle = styled.div`
    width:100%;
    position:absolute;
    top:0;
    right:0;
    left:0;
    bottom:0;
    background:#f5f5f5;
    padding-top:1rem;
    .ulList{
        width:100%;
        height:1rem;
        padding:0 .2rem;
        position:fixed;
        background:#fff;
        display:flex;
        justify-content:space-around;
        align-items:center;
        box-shadow: 0 5px 13px rgba(0,0,0,.12);
        li{
            flex-basis: 25%;
            text-align:center;
            height:.65rem;
            line-height:.65rem;
            font-size:.29rem;
            border:1px solid #ccc;
            font-weight:700;
            color:#606060;
        }
        li:nth-of-type(n){
            border-right:0;
        }
        li:last-child{
            border-radius: 0 .06rem .06rem 0;
            border-right:1px solid #ccc;
        }
    }
`