import React from 'react';
import styled from "styled-components"
import DataContext from '../../DataContext';
import {Col, Row} from 'antd/lib/index';
import "antd/dist/antd.css";
import leftBg from '../../img/left_header2.png';
import {LeftReportHeader, Tail, TailContent, TailHeader} from "../Block";
import _ from 'lodash';

const ReportGrid = styled(Row)`
  width: 90%;
  padding-right: 10%;
  float: right;
  height: 60%;
`;

const ReportCol = styled(Col)`
  box-sizing: border-box;
  background-color: rgba(14, 252, 255, 0.15);
  height: 5.1rem;
  justify-content: center; //子元素水平居中
  align-items: center; //子元素垂直居中
  display: flex;
  border-radius: 9px;
`;

const Label = styled.div`
  text-align: center;
  color: #fff;
  width: 60%;
  font-size: 1.2rem;
`;

const Number = styled.div`
  text-align: center;
  color: #0efcff;
  width: 40%;
  font-size: 1.5rem;
  border-left: #02aeb1 1px solid;
`;

function ThisYearReport(props) {
    const {className} = props;
    const data = React.useContext(DataContext);

    const accumulator = (sum, monthData) => sum + monthData.cnt
    const calcEvg = monthsData => _.reduce(monthsData, accumulator, 0) / monthsData.length;
    return (
        <div className={className}>
            <LeftReportHeader>
                2021年信息公示
            </LeftReportHeader>
            <ReportGrid justify="space-around" align="middle" gutter={[8, 8]}>
                <ReportCol span={11}>
                    <Label>已发布<br/>信息数</Label>
                    <Number>{data.currentyear_fbxx_content_cnt}</Number>
                </ReportCol>
                <ReportCol span={11}>
                    <Label>已公示<br/>信息数</Label>
                    <Number>{data.currentyear_gsxx_content_cnt}</Number>
                </ReportCol>
                <ReportCol span={11}>
                    <Label>月均发<br/>布信息</Label>
                    <Number>{calcEvg(data.currentYear_fbxxMonthly_cnt)}</Number>
                </ReportCol>
                <ReportCol span={11}>
                    <Label>月均公<br/>示信息</Label>
                    <Number>{calcEvg(data.currentYear_gsxxMonthly_cnt)}</Number>
                </ReportCol>
            </ReportGrid>
            <Tail>
                <TailHeader>说明</TailHeader>
                <TailContent>
                    已发布、已公示信息包含各镇、村所发布信息，月平均为已发布平均数，月发布为公示平均数
                </TailContent>
            </Tail>
        </div>
    );
}

export default styled(ThisYearReport)`
  height: 31.6%;
  //margin-top: 3%;
  background: url(${leftBg}) no-repeat;
  background-size: 100% 100%;
`