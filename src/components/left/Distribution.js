import React from 'react';
import styled from "styled-components"
import ReactECharts from 'echarts-for-react/lib/index'
import DataContext from '../../DataContext';
import {LeftReportHeader} from "../Block";
import left from "../../img/left.png";
import ThemeContext from '../../themes/ThemeContext';

function Distribution(props) {

    const {className} = props;
    const data = React.useContext(DataContext);
    const theme = React.useContext(ThemeContext);
    const extractOption = data => {
        return {
            backgroundColor: 'transparent',
            grid: {
                left: '10%',
                right: '10%',
                bottom: '3%',
                width:'150px',
                containLabel: true,
                top: 30,
            },
            radar: {
                shape: 'polygon',
                startAngle: 60,
                axisName:{
                    fontSize:'1rem'
                },
                indicator: [
                    { name: '自治事务', max: 6500 },
                    { name: '财务公开', max: 16000 },
                    { name: '财政公开', max: 30000 },
                    { name: '工作动态', max: 38000 },
                    { name: '便民服务', max: 52000 },
                    { name: '政务公开', max: 25000 }
                ]
            },
            series: [
                {
                    type: 'radar',
                    data: [
                        {
                            value: [4200, 3000, 20000, 35000, 50000, 18000],
                        },
                    ]
                }
            ]
        };
    };
    const option = extractOption(data);

    return (
        <div className={className}>

            <LeftReportHeader>
                信息公示分布
            </LeftReportHeader>

            <ReactECharts
                option={option}
                theme={theme}
                style={{height: 248}}
                className={`background: none;`}
            />
        </div>
    );
}

export default styled(Distribution)`
    height: 31.6%;
    margin-top: 1rem;
    background: url(${left}) no-repeat;
    background-size:100% 100%;
`;