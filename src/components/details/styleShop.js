import styled from "styled-components";


export const ShopStyle = styled.div`
    width:100%;
    background:#fff;
    padding-top:1rem;
    .shop{
        width:100%;
        height:6rem;
        box-shadow: 0 5px 13px rgba(0,0,0,.1);
        li{
            width:100%;
            height:100%;
            img{
                width:100%;
                height:100%;
            }
        }
    }
    .beijing{
        height:.2rem;
        width:100%;
    }
    .shopdate{
        width:100%;
        height:2.2rem;
        background:#fff;
        box-shadow: 0 5px 13px rgba(0,0,0,.1);
        .shopdata_child{
            padding:.4rem .45rem;
            h4{
                font-size: .3rem;
                margin-bottom: .2rem;
                color: #333;
            }
            p{
                font-size: .2rem;
                color: #7f7f7f;
                margin-bottom: .2rem;
                line-height: 1.5;
                overflow: hidden;
            }
            div{
                color: #d44d44;
                font-size: .35rem;
                display: inline-block;
                white-space: nowrap;
                display:flex;
                justify-content:space-between;
                i{
                    font-style:normal;
                }
                span{
                    font-size:.4rem;
                }
               
                
            }
        }
    }
    .choose{
        margin-top:.2rem;
        width:100%;
        height:2.5rem;
        background:#fff;
        box-shadow: 0 5px 13px rgba(0,0,0,.1);
        .choose_child{
            padding:.4rem .45rem;
            h6{
                font-size: .2rem;
                line-height: 1.2;
                padding: 0 0 .15rem;
                color: #999;
            }
            div{
                font-size:.3rem;
                p{
                    line-height: 1.8;
                    color: #333;
                    display: table;
                    .weight{
                        margin-left:.1rem;
                        font-size:.3rem;
                        font-weight:bolder;
                    }
                }
            }
        }
    }

    .details_shop,.parameter{
        padding-top:.2rem;
        width:100%;
        height:100%;
        box-shadow: 0 5px 13px rgba(0,0,0,.1);
        div{
            height:.8rem;
            line-height:.8rem;
            font-size:.3rem;
            padding-left:.4rem;
            font-weight: 700;
            color: #666;
            width:100%;
        }
        img{
            width:100%;
            height:100%;
            background:#fff;
            display:block;
        }
    }
    .shoppingCar{
        position:fixed;
        bottom:0;
        height:1.15rem;
        background:#fff;
        width:100%;
        .noShop{
            width:96%;
            margin:.1rem auto 0;
            height:.8rem;
            line-height:.8rem;
            text-align:center;
            background:#ffd900;
            color:#fff;
            font-size: .3rem;
            font-weight: 700;
            border-radius: .1rem;
        }
        .getShop{
            height:100%;
            display:flex;
            position:relative;
            align-items:center;
            i{
                display:block;
                width:1rem;
                height:.88rem;
                color:#ccc;
                text-align:center;
                line-height:.88rem;
                font-size:.4rem;
            }
            .getNow{
                width: 3rem;
                height: .81rem;
                font-size: .3rem;
                font-weight: 700;
                border-radius: .1rem;
                line-height:.81rem;
                text-align:center;
                margin-left:.2rem;
                border:1px solid #e0e0e0;
                background-image: linear-gradient(#fff,#fcfcfc);
                color: #8c8c8c;
            }
            .getCar{
                width: 3rem;
                height: .81rem;
                font-size: .3rem;
                font-weight: 700;
                border-radius: .1rem;
                line-height:.81rem;
                text-align:center;
                margin-left:.2rem;
                border:1px solid #3f6aec;
                background: linear-gradient(#6e98f4,#4b77ee);
                color: #fff;
            }
       }
    }
`