import styled from "styled-components";

export const BodyStyle = styled.div`
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    overflow:hidden;
    background-image:url("https://static.smartisanos.cn/account.common/img/v2/m/bg_66b2175241.jpg");
    padding:1.3rem .2rem 0 .2rem;
    .phone{
        width:7.02rem;
        height:.9rem;
        border:1px solid #ccc;
        border-bottom:1px solid #f2f2f2;
        border-radius: 6px 6px 0 0;
        margin-bottom: 0;
        position:relative;
        input{
            width:100%;
            height:100%;
            border-radius: 6px 6px 0 0;
            box-shadow: 0 3px 5px -4px rgba(0,0,0,.4) inset, -1px 0 3px -2px rgba(0,0,0,.1) inset;
            border:0;
            outline:0;
            font-size: .3rem;
            color: #b2b2b2;
            font-size: .3rem;
            padding-left:.2rem;
        }
    }
    .password{
        width:7.02rem;
        height:.9rem;
        border:1px solid #ccc;
        border-top: 0;
        border-radius: 0 0 6px 6px;
        position:relative;
        input{
            width:100%;
            height:100%;
            border-radius: 0 0 6px 6px;
            border:0;
            outline:0;
            color: #b2b2b2;
            font-size: .3rem;
            padding-left:.2rem;
        }
    }
    .checkbox{
        display:flex;
        align-items:center;
        padding:.2rem .2rem 0;
        position:relative;
        div{
            background:url("/img/checkout.png")no-repeat;;
            background-size: 22px auto;
            height:22px;
            position:relative;
                span{
                height:100%;
                line-height:22px;
                margin-left:.6rem;
                font-size: .25rem;
                color: #7f7f7f;
            }
        }
        .regiter{
            position:absolute;
            right:1.8rem;
            font-size: .25rem;
            color: #7f7f7f;
        }
        .forget{
            position:absolute;
            right:.4rem;
            font-size: .25rem;
            color: #7f7f7f;
        }
    }
    .login{
        height:1rem;
        width:90%;
        margin:.4rem auto 0;
        position:relative;
        button{
            width:100%;
            height:100%;
            line-height:1rem;
            border:0;
            outline:0;
            background: linear-gradient(#6788d0,#4364bb);
            padding: 1px;
            box-sizing: border-box;
            box-shadow: 0 1px 1px -1px rgba(0,0,0,.8);
            border-radius: 6px;
            color:#fff;
            font-size:.35rem;
        }
        .international{
            margin-top:.2rem;
            position:absolute;
            right:.2rem;
            color: #7f7f7f;
            font-size:.25rem;
            i{
                font-size:.2rem;
                margin-left:.05rem;
            }
        }
    }

    



    .Other{
        width:100%;
        position:absolute;
        bottom:.6rem;
        left:30%;
        display:flex;
        .wb{
            background-image: url("./img/other.png");
            background-size: auto 40px;
            background-position: -59px 0;
            width: 42px;
            height: 40px;
            margin: 0 10px;
        }
        .qq{
            background-image: url("./img/other.png");
            background-size: auto 40px;
            background-position: -119px 0;
            width: 42px;
            height: 40px;
            margin: 0 10px;
        }
    }
`