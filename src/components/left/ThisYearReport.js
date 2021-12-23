import React from 'react';
import styled from "styled-components"
import DataContext from '../../DataContext';
import {Col, Row} from 'antd/lib/index';
import "antd/dist/antd.css";
import leftBg from '../../img/left_header2.png'
import {LeftReportHeader, Tail, TailContent, TailHeader} from "../Block";

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

function ThisYearReport(props) {
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
            <LeftReportHeader>
                2021年信息公示
            </LeftReportHeader>
            <ReportGrid  justify="space-around"  align="middle" gutter={[8,8]}>
                <ReportCol  span={11}>
                    <Label>已发布<br/>信息数</Label>
                    <Number>75</Number>
                </ReportCol>
                <ReportCol span={11}>
                    <Label>已公示<br/>信息数</Label>
                    <Number>38</Number>
                </ReportCol>

                <ReportCol span={11}>
                    <Label>月平均<br/>信息数</Label>
                    <Number>12</Number>
                </ReportCol>
                <ReportCol span={11}>
                    <Label>月发布<br/>信息数</Label>
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

export default styled(ThisYearReport)`
    height: 31.6%;
    //margin-top: 3%;
    background: url(${leftBg}) no-repeat;
    background-size:100% 100%;
`