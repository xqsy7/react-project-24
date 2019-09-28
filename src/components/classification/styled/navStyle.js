import styled from "styled-components";

export const NavStyle = styled.div`
    width:100%;
    color:#ddd;
    padding-top:1rem;
    position:absolute;
    z-index:-1;
    top:0;
    bottom:0;
    right:0;
    left:0;
    ul{
        width:100%;
        display:flex;
        align-items:center;
        jusitify-content:center;
        flex-wrap:wrap;
        overflow:hidden;
        li{
            width:25%;
            height:1.55rem;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            border-right:1px solid #141414;
            border-bottom:1px solid #141414;
            span{
                margin-top:.2rem;
                font-size:.2rem;
                font-weight:600;
            }
            i{
                font-size:.4rem;
            }
        }
    }
`