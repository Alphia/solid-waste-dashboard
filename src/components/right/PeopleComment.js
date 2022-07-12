import React from 'react';
import styled from "styled-components"
import DataContext from '../../DataContext';
import {Col, Row} from 'antd/lib/index';
import "antd/dist/antd.css";
import right from '../../img/right.png'
import {RightReportHeader} from "../Block";
import moment from "moment";

const ReportGrid = styled(Row)`
  width: 93%;
  margin-top: 2%;
  padding-left: 7%;
  float: left;
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

function PeopleComment(props) {

    const {className} = props;
    const context = React.useContext(DataContext);

    return (
        <div className={className}>
            <RightReportHeader>
                {/*{moment().year()}年群众留言*/}
                转移监管
            </RightReportHeader>
            <ReportGrid justify="space-around" align="middle" gutter={[8, 8]}>
                <ReportCol span={11}>
                    <Label>运输<br/>公司</Label>
                    <Num>18家</Num>
                </ReportCol>
                <ReportCol span={11}>
                    <Label>司机<br/>人数</Label>
                    <Num>328人</Num>
                </ReportCol>

                <ReportCol span={11}>
                    <Label>执法<br/>次数</Label>
                    <Num>172次</Num>
                </ReportCol>
                <ReportCol span={11}>
                    <Label>处罚<br/>人次</Label>
                    <Num>76人</Num>
                </ReportCol>
            </ReportGrid>
        </div>
    );
}

export default styled(PeopleComment)`
  height: 31.6%;
  //margin-bottom: 1rem;
  background: url(${right}) no-repeat;
  background-size: 100% 100%;
`