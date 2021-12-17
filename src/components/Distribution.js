import React from 'react';
import styled from "styled-components"
import ReactECharts from 'echarts-for-react'
import DataContext from '../DataContext';
import {ReportHeader, Tail, TailContent, TailHeader} from "./LeftBlock";
import leftBg from "../img/left_header2.png";

function Distribution(props) {

    const {className} = props;
    const data = React.useContext(DataContext);
    const extractOption = data => {
        return {
            legend: {
                data: ['Allocated Budget', 'Actual Spending']
            },
            backgroundColor: 'transparent',
            grid: {
                left: '25%',
                right: '10%',
                bottom: '3%',
                width:'150px',
                containLabel: true,
                top: 30,
            },
            radar: {
                shape: 'polygon',
                indicator: [
                    { name: 'Sales', max: 6500 },
                    { name: 'Administration', max: 16000 },
                    { name: 'Information Technology', max: 30000 },
                    { name: 'Customer Support', max: 38000 },
                    { name: 'Development', max: 52000 },
                    { name: 'Marketing', max: 25000 }
                ]
            },
            series: [
                {
                    name: 'Budget vs spending',
                    type: 'radar',
                    data: [
                        {
                            value: [4200, 3000, 20000, 35000, 50000, 18000],
                            name: 'Allocated Budget'
                        },
                        {
                            value: [5000, 14000, 28000, 26000, 42000, 21000],
                            name: 'Actual Spending'
                        }
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
                style={{height: '60%'}}
                className={`background: none;`}
            />
            <Tail>
                <TailHeader>说明</TailHeader>
                <TailContent>
                    已发布、已公示信息包含各镇、村所发布信息，月平均为已发布平均数，月发布为公示平均数
                </TailContent>
            </Tail>
        </div>
    );
}

export default styled(Distribution)`
    height: 32.3%;
    margin-bottom: 1%;
    background: url(${leftBg}) no-repeat;
    background-size:100% 100%;
`;