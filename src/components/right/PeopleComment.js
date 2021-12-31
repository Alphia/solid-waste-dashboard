import React from 'react';
import styled from "styled-components"
import DataContext from '../../DataContext';
import {Col, Row} from 'antd/lib/index';
import "antd/dist/antd.css";
import right from '../../img/right.png'
import {RightReportHeader} from "../Block";

const ReportGrid = styled(Row)`
  width: 90%;
  padding-right: 10%;
  float: right;
  height: 80%;
`;

const ReportCol = styled(Col)`
  box-sizing: border-box;
  background-color: rgba(14, 252, 255, 0.15);
  height: 40%;
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

const Num = styled.div`
  text-align: center;
  color: #0efcff;
  width: 40%;
  font-size: 1.5rem;
  border-left: #02aeb1 1px solid;
`;

function PeopleComment(props) {

    const {className} = props;
    const context = React.useContext(DataContext);

    return (
        <div className={className}>
            <RightReportHeader>
                2021年群众留言
            </RightReportHeader>
            <ReportGrid justify="space-around" align="middle" gutter={[8, 8]}>
                <ReportCol span={11}>
                    <Label>群众留<br/>言总数</Label>
                    <Num>{context.currentYear_suggent_cnt}</Num>
                </ReportCol>
                <ReportCol span={11}>
                    <Label>已回复<br/>留言数</Label>
                    <Num>{context.currentYear_suggent_response_cnt}</Num>
                </ReportCol>

                <ReportCol span={11}>
                    <Label>留言群<br/>众人数</Label>
                    <Num>{context.currentYear_suggent_person_cnt}</Num>
                </ReportCol>
                <ReportCol span={11}>
                    <Label>留言<br/>回复率</Label>
                    <Num>{Number((context.currentYear_suggent_response_cnt / context.currentYear_suggent_cnt) * 100).toFixed(0) + "%"}</Num>
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