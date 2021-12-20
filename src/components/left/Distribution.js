import React from 'react';
import styled from "styled-components"
import ReactECharts from 'echarts-for-react/lib/index'
import DataContext from '../../DataContext';
import {ReportHeader} from "../Block";
import left from "../../img/left.png";

function Distribution(props) {

    const {className} = props;
    const data = React.useContext(DataContext);
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

            <ReportHeader>
                信息公示分布
            </ReportHeader>

            <ReactECharts
                option={option}
                theme='dark'
                style={{height: '80%'}}
                className={`background: none;`}
            />
        </div>
    );
}

export default styled(Distribution)`
    height: 32.3%;
    margin-bottom: 1%;
    background: url(${left}) no-repeat;
    background-size:100% 100%;
`;