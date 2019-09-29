import styled from "styled-components";

export const MineStyle = styled.div`
    height:100%;
    background:#e5e5e5;
    padding:1.35rem .3rem 1.2rem;;
    .mineBody-Head{
        width:100%;
        height:3.04rem;
        background:#fff;
        border-radius:.2rem .2rem;
        position:relative;
        margin-bottom:.3rem;
        div{
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
                span{
                position:absolute;
                color:#333;
                font-size:.34rem;
                }
                i{
                position:absolute;
                right:.5rem;
                font-size:.2rem;
                color:#ccc;
            }
        }
            
        }
        ul{
            position:relative;
            width:100%;
            height:1.3rem;
            display:flex;
            align-items:center;
            justify-content: space-between;
            box-shadow: 0 1px 2px rgba(0,0,0,.1), 0 18px 20px -10px rgba(0,0,0,.03), 0 18px 20px -10px rgba(0,0,0,.03), 0 10px 20px -10px rgba(0,0,0,.03);
            overflow:hidden;
            li{
                width:100%;
                height:100%;
                display:flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                border-top:1px solid #f2f2f2;
                border-right:1px solid #f2f2f2;
                i{
                    color:#c5c5c5;
                }
                span{
                    margin-top:.15rem;
                }
            }
            li:last-child{
                border-right:0;
            }
        }
    }
    .address,.problem,.server{
        position: relative;
        overflow: hidden;
        border-radius: .2rem;
        background: #fff;
        margin-bottom: .3rem;
        box-shadow: 0 1px 2px rgba(0,0,0,.1), 0 18px 20px -10px rgba(0,0,0,.03), 0 18px 20px -10px rgba(0,0,0,.03), 0 10px 20px -10px rgba(0,0,0,.03);
        ul{
            width:100%;
            height:100%;
            position:relative;
            li{
                line-height:1.22rem;
                height:1.22rem;
                border-bottom:1px solid #f2f2f2;
                span{
                    margin-left:.4rem;
                    color:#333;
                    font-size:.35rem;
                }
                i{
                    position:absolute;
                    right:.3rem;
                    font-size:.2rem;
                    color:#ccc;
                }
            }
        }
    }
`