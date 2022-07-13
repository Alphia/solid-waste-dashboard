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
        const series = {
            jy:[20,30,35,32,50,30,43,33,48,44,28,25],
            jb:[18,32,30,22,26,22,35,60,55,22,32,33],
        }
        const suggestSeries = series.jy;
        const consultationSeries = series.jb;
        const complaintSeries = series.ts;

        return {
            title: {
                text: '年内入库、出库量（万吨）',
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
                data: ['入库', '出库',],
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
                    name: '产废',
                    type: 'bar',
                    data: suggestSeries,
                    itemStyle: {
                        borderRadius: 5,
                    }
                },
                {
                    name: '转移',
                    type: 'bar',
                    data: consultationSeries,
                    itemStyle: {
                        borderRadius: 5,
                    }
                },
                {
                    name: '处废',
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