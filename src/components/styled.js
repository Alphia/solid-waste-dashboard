import styled from "styled-components";
import React from "react";
import HalfYearReport from './HalfYearReport';
import topBg from '../img/top.png';


function Nav(props) {
    const {className} = props;
    return (
        <div className={className}>
            郑州高新区阳光村务数据监控平台
        </div>
    )
}

export const Top = styled(Nav)`
    position: relative;
    top: 0.5vw;
    width: 100%;
    height: 5vw;
    background: url(${topBg}) no-repeat;
    background-size: 100%;
    text-align: center;
    line-height: 4vw;
    color: #0efcff;
    font-size: 1.4vw;
    letter-spacing: .4vw;
`;
export const Left = styled(HalfYearReport)`
    height: 800px;
    width: 800px;
`;

export const Right = {};
export const Middle = {};

