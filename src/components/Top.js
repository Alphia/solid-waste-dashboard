import styled from "styled-components";
import React from "react";
import topBg from '../img/top.png';


const Title = styled((props) => {
    const {className} = props;
    return (
        <div className={className}>
            郑州高新区阳光村务数据监控平台
        </div>
    )
})`
position: relative;
    top: 0.6rem;
    width: 100%;
    height: 6rem;
    background: url(${topBg}) no-repeat;
    background-size: 100%;
    text-align: center;
    line-height: 4.4rem;
    color: #0efcff;
    font-size: 1.7rem;
    letter-spacing: 0.2rem;
`;

const Now = styled((props) => {
    const {className} = props;
    return (
        <div className={className}>
            {Date()}
        </div>
    )
})`
  color: #0efcff;
  margin-top: -3rem;
  float: left;
  width: 25%;
  margin-left:10rem;
  height: 100%;
`;

function Top(props) {
    const {className} = props;
    return (
        <>
            <Title></Title>
            <Now></Now>
        </>
    )
}

export default styled(Top)`
    position: relative;
    top: 0.6rem;
    width: 100%;
    height: 6rem;
    background: url(${topBg}) no-repeat;
    background-size: 100%;
    text-align: center;
    line-height: 4.4rem;
    color: #0efcff;
    font-size: 1.7rem;
    letter-spacing: 0.2rem;
`;