import React from 'react';
import styled from "styled-components"
import DataContext from '../../DataContext';
import {Col, Row} from 'antd/lib/index';
import "antd/dist/antd.css";
import _ from 'lodash';
import hiTechMap from '../../map/HiTechMap';
import ReactECharts from "echarts-for-react";
import * as echarts from 'echarts';
import ThemeContext from "../../themes/ThemeContext";
import {CloudUploadOutlined, ProfileOutlined, TeamOutlined} from "@ant-design/icons";

echarts.registerMap('zzHiTech', hiTechMap);


const ReportGrid = styled(Row)`
  padding-right: 5%;
  padding-left: 5%;
  height: 28%;
`;

const ReportCol = styled(Col)`
  box-sizing: border-box;
  background-color: rgba(14, 252, 255, 0.15);
  justify-content: left; //子元素水平居中
  align-items: center; //子元素垂直居中
  display: flex;
  border-radius: 9px;
  flex-wrap: wrap;
`;

const Icon = styled.div`
  text-align: center;
  color: #a7c0db;
  width: 5.5rem;
  font-size: 3.2rem;
  border-radius: 0.8rem 0 0 0;
  margin-left: -4px;
`;
const Des = styled.div`
  color: #ffffff;
  text-align: center;
  flex-grow: 1;
  font-size: 1.2rem;
  margin: 0 -4px;
  border-radius: 0 0 0.8rem 0.8rem;
  background-color: rgba(167, 192, 219, 0.15);
  letter-spacing: 0.5rem;
`;

const Num = styled.div`
  text-align: center;
  color: #0efcff;
  flex-grow: 1;
  font-size: 2rem;
  border-left: #02aeb1 1px solid;
`;

function Map(props) {

    const {className} = props;
    const data = React.useContext(DataContext);
    const theme = React.useContext(ThemeContext);

    const amountByOrg = data.total_aticleCountGroupByOrg_L1;

    let values = _.map(amountByOrg, e => e.cnt) || [];
    const max = _.max(values) || 1;
    const min = _.min(values) || 0;

    const getAmountOfOrg = org => {
        let orgObj = _.find(amountByOrg, e => e.org_name === org);
        return orgObj ? orgObj.cnt : 0
    }

    const deltaSize = value => 20 * (value - min) / (max - min);
    const deltaHeight = value => deltaSize(value) / 2;

    const extractOption = data => {
        let gouzhaoAmount = getAmountOfOrg('沟赵办事处');
        let shuangqiaoAmount = getAmountOfOrg('双桥办事处');
        let wutongAmount = getAmountOfOrg('梧桐办事处');
        let fengyangAmount = getAmountOfOrg('枫杨办事处');
        let shifoAmount = getAmountOfOrg('石佛办事处');
        return {
            backgroundColor: 'transparent',
            tooltip: {
                show: true,
                formatter: '{b}<br/>历史累计{c}条信息'
            },
            series: [
                {
                    type: 'map',
                    map: 'zzHiTech',
                    label: {
                        show: true,
                        fontSize: "1.1rem"
                    },
                    data: [
                        {name: '沟赵办事处',  value: gouzhaoAmount,itemStyle: {areaColor: '#954ad5', opacity: 0.7}},
                        {name: '双桥办事处', value: shuangqiaoAmount, itemStyle: {areaColor: '#2dffbe', opacity: 0.7}},
                        {name: '梧桐办事处', value:wutongAmount, itemStyle: {areaColor: '#f0f8ff', opacity: 0.7}},
                        {name: '枫杨办事处', value:fengyangAmount, itemStyle: {areaColor: '#3299ff', opacity: 0.7}},
                        {name: '石佛办事处', value:shifoAmount, itemStyle: {areaColor: '#0efcff', opacity: 0.7}},
                    ],
                    markPoint: {
                        symbol: 'circle',
                        symbolSize: 40,
                        label: {
                            fontSize: '1.1rem',
                        },
                        itemStyle: {
                            color: '#fff',
                            opacity: 1,
                        },
                        data: [
                            {
                                x: 255,
                                y: 245 - deltaHeight(gouzhaoAmount),
                                value: gouzhaoAmount,
                                symbolSize: 40 + deltaSize(gouzhaoAmount),
                                label: {color: '#954ad5'},
                                emphasis:{
                                    label: {color: '#954ad5'},
                                }
                            },
                            {
                                x: 508,
                                y: 85 - deltaHeight(shuangqiaoAmount),
                                value: shuangqiaoAmount,
                                symbolSize: 40 + deltaSize(shuangqiaoAmount),
                                label: {color: '#0aaf7b'},
                                emphasis: {
                                    label: {color: '#0aaf7b'}
                                }
                            },
                            {
                                x: 490,
                                y: 315 - deltaHeight(wutongAmount),
                                value: wutongAmount,
                                symbolSize: 40 + deltaSize(wutongAmount),
                                label: {color: '#5a6269'},
                                emphasis: {
                                    label: {color: '#5a6269'},
                                }
                            },
                            {
                                x: 570,
                                y: 190 - deltaHeight(fengyangAmount),
                                value: fengyangAmount,
                                symbolSize: 40 + deltaSize(fengyangAmount),
                                label: {color: '#3299ff'},
                                emphasis: {
                                    label: {color: '#3299ff'},
                                }
                            },
                            {
                                x: 660,
                                y: 360 - deltaHeight(shifoAmount),
                                value: shifoAmount,
                                symbolSize: 40 + deltaSize(shifoAmount),
                                label: {color: '#02aeb1'},
                                emphasis: {
                                    label: {color: '#02aeb1'},
                                }
                            },
                        ],
                    }
                }
            ]
        };
    };
    const option = extractOption(data);

    return (
        <div className={className}>
            <ReportGrid justify="space-around" align="middle" gutter={[8, 8]}>
                <ReportCol span={6}>
                    <Icon><ProfileOutlined/></Icon>
                    <Num>{data.total_content_cnt}</Num>
                    {/*<Number>{99999}</Number>*/}
                    <Des>累计信息总数</Des>
                </ReportCol>
                <ReportCol span={6}>
                    <Icon><CloudUploadOutlined/></Icon>
                    <Num>{data.total_gsxx_content_cnt}</Num>
                    <Des>已公示信息数</Des>
                </ReportCol>

                <ReportCol span={6}>
                    <Icon><TeamOutlined/></Icon>
                    <Num>{data.total_suggent_cnt}</Num>
                    <Des>群众留言总数</Des>
                </ReportCol>
            </ReportGrid>
            <ReactECharts
                option={option}
                theme={theme}
                style={{height: 489}}
            />
        </div>
    );
}

export default styled(Map)`
  height: 69%;
  margin-bottom: 1%;
  background-size: 100% 100%;
`