import React from 'react';
import styled from "styled-components"
import DataContext from '../../DataContext';
import {Col, Divider, Row} from 'antd';
import "antd/dist/antd.css";
import right from "../../img/right.png";
import {RightReportHeader} from "../Block";
import _ from 'lodash';

const ReportGrid = styled(Row)`
    padding-right: 5%;
    padding-left: 5%;
    height: 80%;
`;

const ReportCol = styled(Col)`
    box-sizing: border-box;
    background-color: rgba(14,252,255,0.15) ;
    height: 95%;
    border-radius: 9px;
`;

const Label = styled.div`
    padding-top: 0.5rem;
    text-align: center;
    color: #fff;
    width: 60%;
    font-size: 1rem;
    border-right: #61dafb 1px;
`;

const MyDivider = styled(Divider)`
    margin: 0.2rem;
    border-block-color: rgba(240,248,255,0.26);
`;

const ListWrapper = styled.div`
    padding: 0.3rem;
`;

const List = styled.div`
    display: inline-block;
    color: white;
    font-size: 0.9rem;
    text-align: center;
`;

const List1 = styled(List)`
    width: 20%;
`;
const List2 = styled(List)`
    width: 40%;
`;
const List3 = styled(List)`
    width: 40%;
`;

const Number = styled.div`
    display: inline-block;
    text-align: center;
    color: #fff;
    background-color: rgba(14,252,255,0.35);
    border-radius: 0.6rem;
    width: 1.2rem;
    height: 1.2rem;
    font-size: 0.8rem;
    
`;

const Text = styled.div`
    font-size: 0.8rem;
`;

function Ranking(props) {

    const {className} = props;
    const data = React.useContext(DataContext);
    const extractOption = data => {
        return {
            ins: [
                {index: 1, name: '沟赵办事处', amount: 11},
                {index: 2, name: '枫杨办事处', amount: 3},
                {index: 3, name: '石佛办事处', amount: 2},
                {index: 4, name: '双桥办事处', amount: 0},
                {index: 5, name: '梧桐办事处', amount: 0},
            ],
            village: [
                {index: 1, name: '东连河', amount: 8},
                {index: 2, name: '大里', amount: 4},
                {index: 3, name: '秋雅', amount: 2},
                {index: 4, name: '南流', amount: 1},
                {index: 5, name: '欢河', amount: 1},
            ],
        };
    };
    const option = extractOption(data);

    return (
        <div className={className}>
            <RightReportHeader>
                地区信息发布排名
            </RightReportHeader>
            <ReportGrid justify="space-around" align="middle" gutter={[8, 8]}>
                <ReportCol span={11}>
                    <Label>办事处排名</Label>
                    <MyDivider/>
                    <ListWrapper>
                        <div>
                            <List1>序号</List1>
                            <List2>名称</List2>
                            <List3>发布数</List3>
                        </div>
                        <MyDivider/>
                        {_.map(option.ins, ins => {
                                return <div>
                                    <List1>
                                        <Number>{ins.index}</Number>
                                    </List1>
                                    <List2>
                                        <Text>{ins.name}</Text>
                                    </List2>
                                    <List3>
                                        <Text>{ins.amount}</Text>
                                    </List3>
                                    <MyDivider/>
                                </div>
                            }
                        )}
                    </ListWrapper>
                </ReportCol>
                <ReportCol span={11}>
                    <Label>行政村排名</Label>
                    <MyDivider/>
                    <ListWrapper>
                        <div>
                            <List1>序号</List1>
                            <List2>名称</List2>
                            <List3>发布数</List3>
                        </div>
                        <MyDivider/>
                        {_.map(option.village, village =>
                            <>
                                <List1>
                                    <Number>{village.index}</Number>
                                </List1>
                                <List2>
                                    <Text>{village.name}</Text>
                                </List2>
                                <List3>
                                    <Text>{village.amount}</Text>
                                </List3>
                                <MyDivider/>
                            </>
                        )}
                    </ListWrapper>
                </ReportCol>
            </ReportGrid>
        </div>
    );
}

export default styled(Ranking)`
    height: 32.3%;
    margin-bottom: 1%;
    background: url(${right}) no-repeat;
    background-size:100% 100%;
`

