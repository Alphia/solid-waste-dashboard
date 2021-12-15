import React from 'react';
import styled from "styled-components"
import ReactECharts from 'echarts-for-react'
import DataContext from '../DataContext';

 function HalfYearReport (props) {

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
            <ReactECharts
                option={option}
                theme='walden'
                style={{height:'400px'}}
            />
        </div>
    );
}

export default styled(HalfYearReport)`
    height: 800px;
    width: 800px;
`