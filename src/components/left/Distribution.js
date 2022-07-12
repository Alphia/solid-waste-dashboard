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

    const dataValues =
    [
        {
            "category_id": "61a81f8e6f523c20983a3fd6",
            "cnt": 109,
            "title": "煤矸石"
        },
        {
            "category_id": "61a8204e6f523c20983a3fdb",
            "cnt": 50,
            "title": "选废矿石"
        },
        {
            "category_id": "61a8204e6f523c20983a3fdb",
            "cnt": 20,
            "title": "页岩灰"
        },
        {
            "category_id": "61a81fc66f523c20983a3fd7",
            "cnt": 62,
            "title": "煤灰"
        }
    ]

    const values = _.map(dataValues, e => e.cnt);
    const max = _.max(values);
    const indicator = _.map(dataValues, e => {
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
                固废类型
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