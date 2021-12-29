import React from 'react';
import styled from "styled-components"
import ReactECharts from 'echarts-for-react/lib/index'
import DataContext from '../../DataContext';
import ThemeContext from "../../themes/ThemeContext";
import _ from "lodash";

function Feedback(props) {

    const {className} = props;
    const context = React.useContext(DataContext);
    const theme = React.useContext(ThemeContext);

    const extractOption = data => {
        let feedback = data.suggentCountGroupByMonthAndType;
        const months = _.chain(feedback.jy).map(e=>e.year_month).map(e=>e.split("/")[1]+"月").value();
        const suggestSeries = _.chain(feedback.jy).map(e=>e.cnt).value();
        const consultationSeries = _.chain(feedback.jb).map(e=>e.cnt).value();
        const complaintSeries = _.chain(feedback.ts).map(e=>e.cnt).value();

        return {
            title: {
                text: '12月内公示情况',
                show: true,
                textStyle: {
                    color: 'white',
                    fontSize: '1.4rem',
                    fontWeight: 'normal',
                },
                left: '42%'
            },
            backgroundColor: 'transparent',
            legend: {
                data: ['建议', '咨询', '投诉'],
                left: '70%',
                top: '10%',
                textStyle: {
                    color:'white',
                    fontSize: '1rem'
                }
            },
            grid: {
                left: '5%',
                right: '5%',
                bottom: '3%',
                containLabel: true,
                top: '20%',
            },
            calculable: true,
            xAxis: {
                type: 'category',
                data: months,
                splitLine: {
                    show: false,
                },
                axisLabel:{
                    color:'white',
                    fontSize: '1rem'
                }
            },
            yAxis: {
                type: 'value',
                show: true,
                axisLine: {
                    show: true
                },
                splitLine: {
                    show: false,
                },
                axisLabel:{
                    color:'white',
                    fontSize: '1rem'
                }
            },
            series: [
                {
                    name: '建议',
                    type: 'bar',
                    data: suggestSeries,
                    itemStyle: {
                        borderRadius: 5,
                    }
                },
                {
                    name: '咨询',
                    type: 'bar',
                    data: consultationSeries,
                    itemStyle: {
                        borderRadius: 5,
                    }
                },
                {
                    name: '投诉',
                    type: 'bar',
                    data: complaintSeries,
                    itemStyle: {
                        borderRadius: 5,
                    }
                }
            ]
        }
    };
    const option = extractOption(context);

    return (
        <div className={className}>
            <ReactECharts
                option={option}
                theme={theme}
                style={{height: 276}}
                className={`background: none;`}
            />
        </div>
    );
}

export default styled(Feedback)`
  height: 28%;
  width: 100%;
  margin-bottom: 1%;
  background-size: 100% 100%;
`;