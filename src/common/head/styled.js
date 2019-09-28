import styled from "styled-components";

export const HeadStyle = styled.div`
background:#1d1d1d;
#head{
    height: 1rem;
    width: 100%;
    background: #1d1d1d;
    position: fixed;
    top: 0;
    z-index: 10;
}
.headBox{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 .3rem;
    position:relative;
}
.back{
    width:.8rem;
    background: linear-gradient(#131313,#070707);
    color: #fff;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: .25rem;
    height: 32px;
    text-align:center;
    line-height: 32px;
    position:absolute;
    top:.23rem;
    left:.2rem;
}
.classification-icon{
    position:absolute;
    top:.3rem;
    left:.2rem;
}
.classification-icon i{
    background: #ffffff;
    font-size: .4rem;
    font-weight: 900;
}
.classification{
    color: #ffffff;
    font-size: .3rem;
    font-weight: 900;
    
}
.seach i{
    color: #ffffff;
    font-size: .4rem;
    font-weight: 600;
    position:absolute;
    top:.3rem;
    right:.2rem;
}
`