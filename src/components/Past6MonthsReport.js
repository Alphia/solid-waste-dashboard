import React from 'react';
import styled from "styled-components"
import ReactECharts from 'echarts-for-react'
import DataContext from '../DataContext';
import {ReportHeader, Tail, TailContent, TailHeader} from "./Block";
import leftBg from "../img/left_header2.png";
import left from "../img/left.png";

function Past6MonthsReport(props) {

    const {className} = props;
    const data = React.useContext(DataContext);
    const extractOption = data => {
        return {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['已发布信息', '已公示信息'],
                right: 50,
                top: -5,
            },
            backgroundColor: 'transparent',
            textStyle: {
                fontSize: 16
            },
            grid: {
                left: '10%',
                right: '10%',
                bottom: '3%',
                containLabel: true,
                top: 30,
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['6月', '7月', '8月', '9月', '10月', '11月'],
                axisLabel: {
                    fontSize: 14,
                },
            },
            yAxis: {
                type: 'value',
                splitNumber: 4,
                axisLabel: {
                    fontSize: 14,
                },
            },
            series: [
                {
                    name: '已发布信息',
                    type: 'line',
                    stack: '已发布',
                    areaStyle: {normal: {}},
                    data: [data.currentYear_suggent_response_cnt, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '已公示信息',
                    type: 'line',
                    stack: '已公示',
                    areaStyle: {normal: {}},
                    data: [220, 182, 191, 234, 290, 330, 310]
                }
            ]
        };
    };
    const option = extractOption(data);

    return (
        <div className={className}>

            <ReportHeader>
                半年内公示情况
            </ReportHeader>

            <ReactECharts
                option={option}
                theme='dark'
                style={{height: '78%', overflow: 'show'}}
                className={`background: none;`}
            />
        </div>
    );
}

export default styled(Past6MonthsReport)`
    height: 32.3%;
    margin-bottom: 1%;
    background: url(${left}) no-repeat;
    background-size:100% 100%;
`;