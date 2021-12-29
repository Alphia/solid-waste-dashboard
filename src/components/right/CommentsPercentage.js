import React from 'react';
import styled from "styled-components"
import ReactECharts from 'echarts-for-react/lib/index'
import DataContext from '../../DataContext';
import {RightReportHeader} from "../Block";
import right from "../../img/right.png";
import {Col, Row} from "antd/lib/index";
import "antd/dist/antd.css";
import ThemeContext from '../../themes/ThemeContext';
import _ from 'lodash';

const LabelGrid = styled(Row)`
  margin-top: -2%;
  padding-left: 8%;
  width: 100%;
  padding-right: 9%;
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
  font-size: 1.2rem;
`;

const Num = styled.div`
  text-align: center;
  color: #0efcff;
  font-size: 1.4rem;
`;

function CommentsPercentage(props) {

    const {className} = props;
    const context = React.useContext(DataContext);
    const theme = React.useContext(ThemeContext);

    const commentList = context.currentYear_suggentCountByType;
    const all = _.reduce(commentList, (sum, e) => sum + e.cnt, 0);

    const report = _.find(commentList, e => e.key === 'jb') || {}
    const suggest = _.find(commentList, e => e.key === 'jy') || {}
    const complaint = _.find(commentList, e => e.key === 'ts') || {}

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
                            fontSize: '1.4rem',
                            color: '#0efcff',
                        }
                    },
                    type: 'pie',
                    right: '62%',
                    data: [
                        {
                            value: report.cnt,
                        },
                        {
                            value: all - report.cnt,
                            // name: Number(1),
                            name: Number(report.cnt / all * 100).toFixed(0) + "%",
                        }
                    ],
                    radius: ['40%', '70%']
                },
                {
                    type: 'pie',
                    right: '31%',
                    left: '31%',
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            fontSize: '1.4rem',
                            color: '#0efcff',
                        }
                    },
                    data: [
                        {
                            value: suggest.cnt,
                        },
                        {
                            value: all - suggest.cnt,
                            name: Number(suggest.cnt / all * 100).toFixed(0) + "%",
                        }
                    ],
                    radius: ['40%', '70%']
                },
                {
                    type: 'pie',
                    left: '62%',
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            fontSize: '1.4rem',
                            color: '#0efcff',
                        }
                    },
                    data: [
                        {
                            value: complaint.cnt,
                        },
                        {
                            value: all - complaint.cnt,
                            name: Number(complaint.cnt / all * 100).toFixed(0) + "%",
                        }
                    ],
                    radius: ['40%', '70%']
                }
            ]
        };
    };
    const option = extractOption(context);
    return (
        <div className={className}>

            <RightReportHeader>
                21年群众留言比例
            </RightReportHeader>

            <ReactECharts
                option={option}
                theme={theme}
                style={{height: 180, overflow: 'show', paddingLeft: '5%', paddingRight: '5%'}}
                className={`background: none;`}
            />
            <LabelGrid justify="space-around" align="middle" gutter={[8, 8]}>
                <LabelCol span={7}>
                    <Label>咨询</Label>
                    <Num>{report.cnt}</Num>
                </LabelCol>
                <LabelCol span={7}>
                    <Label>建议</Label>
                    <Num>{suggest.cnt}</Num>
                </LabelCol>
                <LabelCol span={7}>
                    <Label>投诉</Label>
                    <Num>{complaint.cnt}</Num>
                </LabelCol>
            </LabelGrid>
        </div>
    );
}

export default styled(CommentsPercentage)`
  height: 31.6%;
  margin-top: 1rem;
  background: url(${right}) no-repeat;
  background-size: 100% 100%;
`;