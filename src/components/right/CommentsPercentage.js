import React from 'react';
import styled from "styled-components"
import ReactECharts from 'echarts-for-react/lib/index'
import DataContext from '../../DataContext';
import {RightReportHeader} from "../Block";
import right from "../../img/right.png";
import {Col, Row} from "antd/lib/index";
import "antd/dist/antd.css";
import ThemeContext from '../../themes/ThemeContext';

const LabelGrid = styled(Row)`
    margin-top: -4%;
    padding-left: 4%;
    width: 100%;
    padding-right: 5%;
    float: right;
`;


const LabelCol = styled(Col)`
    box-sizing: border-box;
    height: 5.1rem;
    border-radius: 9px;
`;

const Label = styled.div`
    text-align: center;
    color: #fff;
    font-size: 1rem;
`;

const Number = styled.div`
    text-align: center;
    color: #0efcff;
    font-size: 1.2rem;
`;

function CommentsPercentage(props) {

    const {className} = props;
    const data = React.useContext(DataContext);
    const theme = React.useContext(ThemeContext);
    const extractOption = data => {
        return {
            title: {
                left: 'center',
                top: 'center'
            },
            backgroundColor: 'transparent',
            series: [
                {
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            fontSize: '1rem',
                        }
                    },
                    type: 'pie',
                    right: '66.6667%',
                    data: [
                        {
                            value: 233,
                        },
                        {
                            value: 234,
                            name: 'B'
                        }
                    ],
                    radius: ['40%', '70%']
                },
                {
                    type: 'pie',
                    right: '33.3333%',
                    left: '33.3333%',
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            fontSize: '1rem',
                        }
                    },
                    data: [
                        {
                            value: 233,
                        },
                        {
                            value: 1548,
                            name: 'C'
                        }
                    ],
                    radius: ['40%', '70%']
                },
                {
                    type: 'pie',
                    left: '66.6667%',
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            fontSize: '1rem',
                        }
                    },
                    data: [
                        {
                            value: 233,
                        },
                        {
                            value: 335,
                            name: 'A'
                        }
                    ],
                    radius: ['40%', '70%']
                }
            ]
        };
    };
    const option = extractOption(data);
    return (
        <div className={className}>

            <RightReportHeader>
                21年群众留言比例
            </RightReportHeader>

            <ReactECharts
                option={option}
                theme={theme}
                style={{height: '58%', overflow: 'show',paddingLeft:'5%',paddingRight:'5%'}}
                className={`background: none;`}
            />
            <LabelGrid justify="space-around"  align="middle" gutter={[8,8]}>
                <LabelCol span={7}>
                    <Label>咨询</Label>
                    <Number>12</Number>
                </LabelCol>
                <LabelCol span={7}>
                    <Label>建议</Label>
                    <Number>28</Number>
                </LabelCol>
                <LabelCol span={7}>
                    <Label>投诉</Label>
                    <Number>10</Number>
                </LabelCol>
            </LabelGrid>
        </div>
    );
}

export default styled(CommentsPercentage)`
    height: 31.6%;
    margin-top: 1rem;
    background: url(${right}) no-repeat;
    background-size:100% 100%;
`;