import styled from "styled-components";
import React from "react";
import moment from "moment";
import 'moment/locale/zh-cn';

export const Now = styled((props) => {
    const {className} = props;
    moment.locale('zh-cn');
    return (
        <div className={className}>
            {moment().format('LLLL')}
        </div>
    )
})`
  color: #0efcff;
  margin-top: -4rem;
  float: left;
  width: 25%;
  margin-left:7rem;
  font-size: 1.2rem;
  letter-spacing: 0.2rem;
`;