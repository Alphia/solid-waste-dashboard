import React from 'react';
import styled from "styled-components"
import ReactECharts from 'echarts-for-react/lib/index'
import DataContext from '../../DataContext';
import {LeftReportHeader} from "../Block";
import left from "../../img/left.png";
import ThemeContext from '../../themes/ThemeContext';
import _ from "lodash";

function Past6MonthsReport(props) {

    const {className} = props;
    const data = React.useContext(DataContext);
    const theme = React.useContext(ThemeContext);
    const extractOption = data => {
        const publicPost = data.currentYear_gsxxMonthly_cnt;
        const releasedPost = data.currentYear_fbxxMonthly_cnt;

        const months = _.chain(publicPost).map(e=>e.yearmonth).map(e=>e.split("/")[1]+"月").value();
        const publicSeries = _.chain(publicPost).map(e=>e.cnt).value();
        const releasedSeries = _.chain(releasedPost).map(e=>e.cnt).value();

        return {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['转移申请', '审批通过'],
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
                data: months,
                axisLabel: {
                    color:'white',
                    fontSize: '1rem',
                },
                splitLine: {
                    show: false,
                }
            },
            yAxis: {
                type: 'value',
                splitNumber: 4,
                axisLabel: {
                    fontSize: '1rem',
                    color:'white'
                },
                splitLine: {
                    show: false,
                }
            },
            series: [
                {
                    name: '转移申请',
                    type: 'line',
                    stack: '已发布',
                    smooth: true,
                    data: releasedSeries,
                },
                {
                    name: '审批通过',
                    type: 'line',
                    stack: '已公示',
                    smooth: true,
                    data: publicSeries,
                }
            ]
        };
    };
    const option = extractOption(data);

    return (
        <div className={className}>

            <LeftReportHeader>
                转移计划
            </LeftReportHeader>

            <ReactECharts
                option={option}
                theme={theme}
                style={{height: 242, overflow: 'show'}}
                className={`background: none;`}
            />
        </div>
    );
}

export default styled(Past6MonthsReport)`
    height: 31.6%;
    margin-top: 1rem;
    background: url(${left}) no-repeat;
    background-size:100% 100%;
`;