import styled from "styled-components";
import topBg from "../../img/top.png";
import React from "react";

export const Title = styled((props) => {
    const {className} = props;
    return (
        <div className={className}>
            郑州高新区阳光村务数据监控平台
        </div>
    )
})`
    margin-top: 0.6rem;
    padding-bottom: 0.5rem;
    width: 100%;
    background: url(${topBg}) no-repeat;
    background-size: 100%;
    text-align: center;
    line-height: 4rem;
    color: #0efcff;
    font-size: 1.7rem;
    letter-spacing: 0.1rem;
`;