import React from 'react';
import styled from "styled-components"
import DataContext from '../../DataContext';
import {Col, Row} from 'antd/lib/index';
import "antd/dist/antd.css";
import rightBg from '../../img/right_header2.png'
import hiTechMap from '../../map/HiTechMap';
import ReactECharts from "echarts-for-react";
import * as echarts from 'echarts';
import ThemeContext from "../../themes/ThemeContext";
import {CloudUploadOutlined, MessageOutlined, ProfileOutlined, TeamOutlined} from "@ant-design/icons";

console.log(hiTechMap);
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

const Number = styled.div`
  text-align: center;
  color: #0efcff;
  flex-grow: 1;
  font-size: 2.2rem;
  border-left: #02aeb1 1px solid;
`;

function Map(props) {

    const {className} = props;
    const data = React.useContext(DataContext);
    const theme = React.useContext(ThemeContext);
    const extractOption = data => {
        return {
            backgroundColor: 'transparent',
            tooltip: {
                show: true,
                formatter: '{b}<br/>{c} (p / km2)'
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
                        {name: '沟赵办事处', value: 200, itemStyle: {areaColor: '#be36ff', opacity: 0.7}},
                        {name: '双桥办事处', value: 154, itemStyle: {areaColor: '#2dffbe', opacity: 0.7}},
                        {name: '梧桐办事处', value: 6992.6, itemStyle: {areaColor: '#f0f8ff', opacity: 0.7}},
                        {name: '枫杨办事处', value: 31686.1, itemStyle: {areaColor: '#3299ff', opacity: 0.7}},
                        {name: '石佛办事处', value: 6992.6, itemStyle: {areaColor: '#0efcff', opacity: 0.7}},
                    ],
                    markPoint: {
                        symbol: 'circle',
                        symbolSize: 40,
                        label:{
                            fontSize:'1.1rem',
                        },
                        itemStyle:{
                            color:'#fff',
                            opacity: 1,
                        },
                        data: [
                            {x:255,y:245,value:200,label:{color:'#be36ff'}},
                            {x:508,y:85,value:57,label:{color:'#0aaf7b'}},
                            {x:490,y:315,value:57,label:{color:'#5a6269'}},
                            {x:570,y:190,value:15,label:{color:'#3299ff'}},
                            {x:660,y:345,value:75,label:{color:'#02aeb1'}},
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
                    <Icon><ProfileOutlined /></Icon>
                    <Number>75</Number>
                    <Des>累计信息总数</Des>
                </ReportCol>
                <ReportCol span={6}>
                    <Icon><CloudUploadOutlined /></Icon>
                    <Number>38</Number>
                    <Des>已公示信息数</Des>
                </ReportCol>

                <ReportCol span={6}>
                    <Icon><TeamOutlined /></Icon>
                    <Number>12</Number>
                    <Des>群众留言总数</Des>
                </ReportCol>
            </ReportGrid>
            <ReactECharts
                option={option}
                theme={theme}
                style={{height: 489, width:860}}
            />
        </div>
    );
}

export default styled(Map)`
  height: 69%;
  margin-bottom: 1%;
    //background: url(${rightBg}) no-repeat;
  background-size: 100% 100%;
`