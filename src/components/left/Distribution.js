import React from 'react';
import styled from "styled-components"
import ReactECharts from 'echarts-for-react/lib/index'
import DataContext from '../../DataContext';
import {LeftReportHeader} from "../Block";
import left from "../../img/left.png";
import ThemeContext from '../../themes/ThemeContext';
import _ from 'lodash';

function Distribution(props) {

    const {className} = props;
    const data = React.useContext(DataContext);
    const theme = React.useContext(ThemeContext);

    const values = _.map(data.currentYear_gsxxGroupBycategory_cnt, e => e.cnt);
    const max = _.max(values);
    const indicator = _.map(data.currentYear_gsxxGroupBycategory_cnt, e => {
        return {name: e.title, max: max}
    });
    const extractOption = data => {
        return {
            backgroundColor: 'transparent',
            grid: {
                left: '10%',
                right: '10%',
                bottom: '3%',
                width: '150px',
                containLabel: true,
                top: 30,
            },
            radar: {
                shape: 'polygon',
                // startAngle: 60,
                axisName: {
                    fontSize: '1rem'
                },
                indicator: indicator
            },
            series: [
                {
                    type: 'radar',
                    data: [
                        {
                            value: values,
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
  background-size: 100% 100%;
`;