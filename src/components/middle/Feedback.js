import React from 'react';
import styled from "styled-components"
import ReactECharts from 'echarts-for-react/lib/index'
import DataContext from '../../DataContext';
import middle from "../../img/middle.png";

function Feedback(props) {

    const {className} = props;
    const data = React.useContext(DataContext);
    const extractOption = data => {
        return {
            title: {
                text: '半年内公示情况',
                show: true,
                textStyle: {
                    color: 'white',
                    fontSize: '1.2rem',
                    fontWeight: 'normal'
                },
                left: '45%'
            },
            backgroundColor: 'transparent',
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['建议', '咨询', '投诉'],
                left: '70%',
                top: '10%',
            },
            grid: {
                left: '5%',
                right: '5%',
                bottom: '3%',
                containLabel: true,
                top: '20%',
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    // prettier-ignore
                    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                }
            ],
            yAxis: {
                type: 'value',
                show: true,
                axisLine: {
                    show: true
                },
                splitLine: {
                    show: false,
                }
            },
            series: [
                {
                    name: '建议',
                    type: 'bar',
                    data: [
                        2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 35.6, 62.2, 32.6, 20.0, 6.4, 3.3
                    ],

                },
                {
                    name: '咨询',
                    type: 'bar',
                    data: [
                        2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3
                    ],
                },
                {
                    name: '投诉',
                    type: 'bar',
                    data: [
                        2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 17.6, 18.2, 4.7, 18.8, 6.0, 2.3
                    ],
                }
            ]
        }
            ;
        ;
    };
    const option = extractOption(data);

    return (
        <div className={className}>
            <ReactECharts
                option={option}
                theme='dark'
                style={{height: '100%'}}
                className={`background: none;`}
            />
        </div>
    );
}

export default styled(Feedback)`
    height: 28%;
    margin-bottom: 1%;
    //background: url(${middle}) no-repeat;
    background-size:100% 100%;
`;