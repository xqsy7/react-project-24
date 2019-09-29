import styled from "styled-components";

export const ModifyStyle = styled.div`
    width:100%;
    height:100%;
    background:#e5e5e5;
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    padding:1.35rem 0 1.2rem;
    .mineBody-Head{
        width:94%;
        height:1.6rem;
        background:#fff;
        border-radius:.2rem .2rem;
        position:relative;
        margin:0 auto .3rem;
        button{
            width:100%;
            height:100%;
            line-height:1rem;
            border:0;
            outline:0;
            margin-top:.6rem;
            background: linear-gradient(#6788d0,#4364bb);
            padding: 1px;
            box-sizing: border-box;
            box-shadow: 0 1px 1px -1px rgba(0,0,0,.8);
            border-radius: 6px;
            color:#fff;
            font-size:.35rem;
        }
        .modify_b{
            margin-top:.2rem;
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
        .back{
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
        .passwordModify{
            width:100%;
            height:1rem;
            border-radius: 6px 6px 6px 6px;
            border:0;
            outline:0;
            color: #fff;
            background: linear-gradient(#6788d0,#4364bb);
            margin-top:.4rem;
            font-size: .35rem;
            padding-left:.2rem;
        }
        .backLogin{
            width:100%;
            margin-top:.8rem;
            text-align:center;
            height:1rem;
            line-height:1rem;
            background: linear-gradient(#e87067,#df5249);
        }
        .modify{
            height:1.73rem;
            margin-left:.2rem;
            display:flex;
            align-items:center;
            position:relative;
            input{
                opacity:0;
                position:absolute;
                width:1.5rem;
                height:1.73rem;
                left:0;
                z-index:1;
            }
            .img{
                position:absolute;
                left:0;
                img{
                width:1.12rem;
                height:1.12rem;
                border-radius:50%;
                }
           
            }
            .input{
                position:relative;
                width:78%;
                left:22%;
                height:1.73rem;
                line-height:1.73rem;
                span{
                position:absolute;
                color:#333;
                font-size:.34rem;
                }
                i{
                position:absolute;
                right:.8rem;
                font-size:.4rem;
                color:#ccc;
            }
            }
        }
    }
`