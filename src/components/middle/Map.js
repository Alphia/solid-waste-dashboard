import React from 'react';
import styled from "styled-components"
import DataContext from '../../DataContext';
import {Col, Row} from 'antd/lib/index';
import "antd/dist/antd.css";
import _ from 'lodash';
import hiTechMap from '../../map/HiTechMap';
import yulinMap from '../../map/610800.json';
import ReactECharts from "echarts-for-react";
import * as echarts from 'echarts';
import ThemeContext from "../../themes/ThemeContext";
import {CloudUploadOutlined, ProfileOutlined, TeamOutlined} from "@ant-design/icons";

echarts.registerMap('yulinMap', yulinMap);


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
  width: 4rem;
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
  font-size: 1.8rem;
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
            series: [
                {
                    type: 'map',
                    map: 'yulinMap',
                    zoom: 1.2,
                    top: 40,
                    label: {
                        show: true,
                        fontSize: "1.1rem",
                        formatter: '{b}\n{c}万吨'
                    },
                    data: [
                        {name: '定边县', value: 55, itemStyle: {areaColor: '#75588d', opacity: 0.7}},
                        {name: '府谷县', value: '73', itemStyle: {areaColor: '#2dffbe', opacity: 0.7}},
                        {name: '横山县', value: '37', itemStyle: {areaColor: '#f0f8ff', opacity: 0.7}},
                        {name: '佳县', value: '32', itemStyle: {areaColor: '#2876c3', opacity: 0.7}},
                        {name: '靖边县', value: '46', itemStyle: {areaColor: '#3da5a6', opacity: 0.7}},
                        {name: '米脂县', value: '17', itemStyle: {areaColor: '#27b268', opacity: 0.7}},
                        {name: '神木县', value: '116', itemStyle: {areaColor: '#ada584', opacity: 0.7}},
                        {name: '清涧县', value: '14', itemStyle: {areaColor: '#10d099', opacity: 0.7}},
                        {name: '绥德县', value: '23', itemStyle: {areaColor: '#405c9d', opacity: 0.7}},
                        {
                            name: '吴堡县',
                            value: '8',
                            labelLine: {show: true},
                            itemStyle: {areaColor: '#a36c9e', opacity: 0.7}
                        },
                        {name: '榆阳区', value: '92', itemStyle: {areaColor: '#ad8f7d', opacity: 0.7}},
                        {name: '子洲县', value: '14', itemStyle: {areaColor: '#ebbd9e', opacity: 0.7}},
                    ]
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
                    <Num>{data.total_content_cnt}万吨</Num>
                    {/*<Number>{99999}</Number>*/}
                    <Des>历史累计产废</Des>
                </ReportCol>
                <ReportCol span={6}>
                    <Icon><CloudUploadOutlined/></Icon>
                    <Num>{data.total_gsxx_content_cnt}万吨</Num>
                    <Des>历史累计转移</Des>
                </ReportCol>

                <ReportCol span={6}>
                    <Icon><TeamOutlined/></Icon>
                    <Num>{data.total_suggent_cnt}人</Num>
                    <Des>累计执法处罚</Des>
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