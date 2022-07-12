import React from 'react';
import styled from "styled-components"
import DataContext from '../../DataContext';
import {Col, Row} from 'antd/lib/index';
import "antd/dist/antd.css";
import left from "../../img/left.png";
import {LeftReportHeader} from "../Block";
import _ from 'lodash';
import moment from "moment";

const ReportGrid = styled(Row)`
  width: 93%;
  margin-top: 2%;
  padding-right: 7%;
  float: right;
  height: 72%;
`;

const ReportCol = styled(Col)`
  box-sizing: border-box;
  background-color: rgba(14, 252, 255, 0.15);
  height: 6rem;
  justify-content: center; //子元素水平居中
  align-items: center; //子元素垂直居中
  display: flex;
  border-radius: 9px;
`;

const Label = styled.div`
  text-align: center;
  color: #fff;
  width: 40%;
  font-size: 1.2rem;
`;

const Num = styled.div`
  text-align: center;
  color: #0efcff;
  width: 60%;
  font-size: 1.5rem;
  border-left: #02aeb1 1px solid;
`;

function ThisYearReport(props) {
    const {className} = props;
    const data = React.useContext(DataContext);

    const accumulator = (sum, monthData) => sum + monthData.cnt
    const calcEvg = monthsData => Number(_.reduce(monthsData, accumulator, 0) / monthsData.length).toFixed(0);
    return (
        <div className={className}>
            <LeftReportHeader>
                {/*{moment().year()}年信息公示*/}
                产废监管
            </LeftReportHeader>
            <ReportGrid justify="space-around" align="middle" gutter={[12, 12]}>
                <ReportCol span={11}>
                    <Label>纳管<br/>企业</Label>
                    <Num>{data.currentyear_fbxx_content_cnt}家</Num>
                </ReportCol>
                <ReportCol span={11}>
                    <Label>年度<br/>计划</Label>
                    <Num>{calcEvg(data.currentYear_fbxxMonthly_cnt)}0万吨</Num>
                </ReportCol>
                <ReportCol span={11}>
                    <Label>目前<br/>固废</Label>
                    <Num>{data.currentyear_gsxx_content_cnt}万吨</Num>
                </ReportCol>
                <ReportCol span={11}>
                    <Label>审批<br/>通过</Label>
                    <Num>{calcEvg(data.currentYear_gsxxMonthly_cnt)}23条</Num>
                </ReportCol>
            </ReportGrid>
        </div>
    );
}

export default styled(ThisYearReport)`
  height: 31.6%;
  background: url(${left}) no-repeat;
  background-size: 100% 100%;
`