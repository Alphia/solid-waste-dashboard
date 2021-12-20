import React from 'react';
import styled from "styled-components"
import ReactECharts from 'echarts-for-react/lib/index'
import DataContext from '../../DataContext';
import {MidReportHeader} from "../Block";
import middle from "../../img/middle.png";

function Feedback(props) {

    const {className} = props;
    const data = React.useContext(DataContext);
    const extractOption = data => {
        return {
            backgroundColor: 'transparent',
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['建议', '咨询', '投诉'],
                left: '66%'

            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    // prettier-ignore
                    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '建议',
                    type: 'bar',
                    data: [
                        2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
                    ],

                },
                {
                    name: '咨询',
                    type: 'bar',
                    data: [
                        2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
                    ],
                },
                {
                    name: '投诉',
                    type: 'bar',
                    data: [
                        2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
                    ],
                }
            ]
        };;
    };
    const option = extractOption(data);

    return (
        <div className={className}>

            <MidReportHeader>
                半年内公示情况
            </MidReportHeader>

            <ReactECharts
                option={option}
                theme='dark'
                style={{height: '98%', overflow: 'show'}}
                className={`background: none;`}
            />
        </div>
    );
}

export default styled(Feedback)`
    height: 32.3%;
    margin-bottom: 1%;
    //background: url(${middle}) no-repeat;
    background-size:100% 100%;
`;