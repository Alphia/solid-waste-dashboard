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

console.log(hiTechMap);
echarts.registerMap('zzHiTech', hiTechMap);


const ReportGrid = styled(Row)`
    padding-right: 5%;
    padding-left: 5%;
    height: 20%;
`;

const ReportCol = styled(Col)`
    box-sizing: border-box;
    background-color: rgba(14,252,255,0.15) ;
    height: 5.1rem;
    justify-content:center;//子元素水平居中
    align-items:center;//子元素垂直居中
    display: flex;
    border-radius: 9px;
`;

const Label = styled.div`
    text-align: center;
    color: #fff;
    width: 60%;
    font-size: 1.2rem;
    border-right: #61dafb 1px;
`;

const Number = styled.div`
    text-align: center;
    color: #0efcff;
    width: 40%;
    font-size: 1.5rem;
    border-left: #fff 1px solid;
    border-left: #9363ff 1px solid;
`;

function Map(props) {

    const {className} = props;
    const data = React.useContext(DataContext);
    const theme = React.useContext(ThemeContext);
    const extractOption = data => {
        return {
            backgroundColor: 'transparent',
            tooltip: {
                show:true,
                formatter: '{b}<br/>{c} (p / km2)'
            },
            series: [
                {
                    // name: 'zzHiTech',
                    type: 'map',
                    map: 'zzHiTech',
                    colorBy: 'data',
                    label: {
                        show: true
                    },
                    data: [
                        { name: '沟赵办事处', value: 20057.34, itemStyle:{areaColor:'#be36ff',opacity:0.7} },
                        { name: '双桥办事处', value: 15477.48, itemStyle:{areaColor:'#2dffbe',opacity:0.7} },
                        { name: '梧桐办事处', value: 6992.6,itemStyle:{areaColor:'#f0f8ff',opacity:0.7} },
                        { name: '枫杨办事处', value: 31686.1,itemStyle:{areaColor:'#3299ff',opacity:0.7} },
                        { name: '石佛办事处', value: 6992.6,itemStyle:{areaColor:'#0efcff',opacity:0.7} },
                    ],
                }
            ]
        };
    };
    const option = extractOption(data);

    return (
        <div className={className}>
            <ReportGrid  justify="space-around"  align="middle" gutter={[8,8]}>
                <ReportCol  span={7}>
                    <Label>群众留<br/>言总数</Label>
                    <Number>75</Number>
                </ReportCol>
                <ReportCol span={7}>
                    <Label>已回复<br/>留言数</Label>
                    <Number>38</Number>
                </ReportCol>

                <ReportCol span={7}>
                    <Label>留言群<br/>众总数</Label>
                    <Number>12</Number>
                </ReportCol>
            </ReportGrid>
            <ReactECharts
                option={option}
                theme={theme}
                style={{height: '80%', overflow: 'show'}}
            />
        </div>
    );
}

export default styled(Map)`
    height: 69%;
    margin-bottom: 1%;
    //background: url(${rightBg}) no-repeat;
    background-size:100% 100%;
`