import React from 'react';
import styled from "styled-components"
import DataContext from '../../DataContext';
import {Col, Divider, Row} from 'antd';
import "antd/dist/antd.css";
import right from "../../img/right.png";
import {RightReportHeader} from "../Block";
import _ from 'lodash';

const ReportGrid = styled(Row)`
  padding-right: 5.5%;
  padding-left: 4.5%;
  height: 78%;
`;

const ReportCol = styled(Col)`
  box-sizing: border-box;
  background-color: rgba(14, 252, 255, 0.15);
  height: 100%;
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
  border-block-color: rgba(240, 248, 255, 0.26);
`;

const ListWrapper = styled.div`
  padding: 0.3rem 0.6rem 0.3rem 0.3rem;
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

const CircleNum = styled.div`
  display: inline-block;
  text-align: center;
  color: #fff;
  background-color: rgba(14, 252, 255, 0.35);
  border-radius: 0.6rem;
  width: 1.2rem;
  height: 1.2rem;
  font-size: 0.8rem;
`;

const Text = styled.div`
  font-size: 0.9rem;
`;
const Num = styled.div`
  color: #0efcff;
  font-size: 1rem;
`;

function Ranking(props) {

    const {className} = props;
    const context = React.useContext(DataContext);

    const extractOption = context => {
        const rankingByL1 = context.currentyear_aticleCountGroupByOrg_L1;
        const rankingByL2 = context.currentyear_aticleCountGroupByOrg_L2;

        const insList = _.chain(rankingByL1)
            .sortBy('cnt')
            .reverse()
            .map((e, index) => {
                return {index: index + 1, name: e.org_name, amount: e.cnt}
            })
            .value();
        const villageList = _.chain(rankingByL2)
            .sortBy('cnt')
            .reverse()
            .map((e, index) => {
                return {index: index + 1, name: e.org_name, amount: e.cnt}
            })
            .value();

        return {
            ins: insList,
            village: villageList,
        };
    };
    const option = extractOption(context);

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
                        {_.chain(option.ins).take(5).map(ins =>
                            <div>
                                <List1>
                                    <CircleNum>{ins.index}</CircleNum>
                                </List1>
                                <List2>
                                    <Text>{ins.name}</Text>
                                </List2>
                                <List3>
                                    <Text><Num>{ins.amount}</Num></Text>
                                </List3>
                                <MyDivider/>
                            </div>
                        ).value()}
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
                        {_.chain(option.village).take(5).map(village =>
                            <>
                                <List1>
                                    <CircleNum>{village.index}</CircleNum>
                                </List1>
                                <List2>
                                    <Text>{village.name}</Text>
                                </List2>
                                <List3>
                                    <Text><Num>{village.amount}</Num></Text>
                                </List3>
                                <MyDivider/>
                            </>
                        ).value()
                        }
                    </ListWrapper>
                </ReportCol>
            </ReportGrid>
        </div>
    );
}

export default styled(Ranking)`
  height: 31.6%;
  margin-top: 1rem;
  background: url(${right}) no-repeat;
  background-size: 100% 100%;
`

