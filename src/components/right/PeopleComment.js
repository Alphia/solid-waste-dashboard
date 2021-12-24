import React from 'react';
import styled from "styled-components"
import DataContext from '../../DataContext';
import {Col, Row} from 'antd/lib/index';
import "antd/dist/antd.css";
import rightBg from '../../img/right_header2.png'
import {RightReportHeader, Tail, TailContent, TailHeader} from "../Block";

const ReportGrid = styled(Row)`
    width: 90%;
    padding-right: 10%;
    float: right;
    height: 60%;
`;

const ReportCol = styled(Col)`
    box-sizing: border-box;
    background-color: rgba(14,252,255,0.15) ;
    height: 5.1rem;
    justify-content:center;//子元素水平居中
    align-items:center;//子元素垂直居中
    display: flex;
    border-radius: 9px;
`;

const Label = styled.div`
    text-align: center;
    color: #fff;
    width: 60%;
    font-size: 1.2rem;
    border-right: #61dafb 1px;
`;

const Number = styled.div`
    text-align: center;
    color: #0efcff;
    width: 40%;
    font-size: 1.5rem;
    border-left: #fff 1px solid;
`;

function PeopleComment(props) {

    const {className} = props;
    const data = React.useContext(DataContext);
    const extractOption = data => {
        return {
            title: {
                text: '半年内公示情况'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['已发布信息', '已公示信息']
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                // height: '40%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['6月', '7月', '8月', '周四', '周五', '周六', '周日']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '已发布信息',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data: [data.currentYear_suggent_response_cnt, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '已公示信息',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data: [220, 182, 191, 234, 290, 330, 310]
                }
            ]
        };
    };
    const option = extractOption(data);

    return (
        <div className={className}>
            <RightReportHeader>
                21年群众留言
            </RightReportHeader>
            <ReportGrid  justify="space-around"  align="middle" gutter={[8,8]}>
                <ReportCol  span={11}>
                    <Label>群众留<br/>言总数</Label>
                    <Number>75</Number>
                </ReportCol>
                <ReportCol span={11}>
                    <Label>已回复<br/>留言数</Label>
                    <Number>38</Number>
                </ReportCol>

                <ReportCol span={11}>
                    <Label>留言群<br/>众总数</Label>
                    <Number>12</Number>
                </ReportCol>
                <ReportCol span={11}>
                    <Label>留言<br/>回复率</Label>
                    <Number>15</Number>
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

export default styled(PeopleComment)`
    height: 31.6%;
    //margin-bottom: 1rem;
    background: url(${rightBg}) no-repeat;
    background-size:100% 100%;
`