import styled from "styled-components";

export const PhoneStyle = styled.div`
#phone,#phone-Accessories{
    background: #ffffff;
    padding-top: 1rem;
}
.phone-Head{
    height: .667rem;
    border-bottom: 1px solid #ebebeb;
}
#phone,#phone-Accessories,#shoe-clothes,#purifier{
    box-shadow: 0 5px 13px rgba(0,0,0,.1);
}
.phone-Head span{
    display: block;
    font-size: .36rem;
    color: #666666;
    font-weight: 700;
    text-indent: .27rem;
    line-height: .667rem;
}
.phone-img{
    padding: .38rem .3rem;
    border-bottom: 1px solid #ebebeb;
}
.phone-img div{
    width: 100%;
    overflow: hidden;
    height: 2.2rem;
}
.phone-img div img{
    height: 2.2rem;
    width: 100%;
    display: block;
    box-shadow: 0 0 .1rem #cccccc;
}
.phone-bottom li a{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.6rem;
}
.phone-bottom li a:first-child{
    border-bottom: 1px solid #ebebeb;
}
.phone-bottom li div{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: .2rem;
}
.phone-bottom li div img{
    width: .91rem;
    height: .91rem;
    display: block;
}
.phone-bottom li div span{
    font-size: .32rem;
    color: rgba(0,0,0,.8);
    font-weight: 700;
    margin-left: .3rem;
}
.phone-bottom li i{
    margin-right: .2rem;
    font-size: .3rem;
    color: #cccccc;
    font-weight: 700;
}
#phone-Accessories{
    margin-top: .15rem;
    padding-top: 0;
}
.phone-Accessories-Bottom{
    padding: .38rem .3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}
.phone-Accessories-Bottom li{
    width: 30%;
    height: 3.17rem;
    margin-bottom: .2rem;
}
.phone-Accessories-Bottom li div{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 2.7rem;
    border: 1px solid #f0f0f0;
    border-radius: .1rem;
}
.phone-Accessories-Bottom li div img{
    width: 1.7rem;
    height: 1.7rem;
}
.phone-Accessories-Bottom li span{
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    margin: .1rem 0 .15rem;
    font-size: .23rem;
    font-weight: 700;
    text-indent: .05rem;
}
#shoe-clothes,#purifier{
    margin-top: .15rem;
    background: #ffffff;
}
#purifier ul{
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
}
#purifier ul li{
    width:50%;
    height: 1.51rem;
}
#purifier ul li a{
    height: 1.51rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
#purifier ul li a:nth-child(2n+1){
    border-right: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
}
#purifier ul li a:nth-child(2n){
    border-bottom: 1px solid #ebebeb;
}
#purifier ul li img{
    width: .91rem;
    height: .91rem;
    margin: 0 .08rem;
}
#purifier ul li span{
    display: block;
    width: 3.1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    line-height: 1.2;
    font-size: .3rem;
    font-weight: 700;
    color: #666;
    white-space: nowrap;
    padding-right: .1rem;
}
#purifier ul li i{
    color: #cccccc;
    font-size: .3rem;
    margin-right: .1rem;
}
.free{
    padding-bottom:1.14rem;
}

`