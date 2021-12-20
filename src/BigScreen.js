import styled from "styled-components"
import React from "react";
import Top from './components/top/Top';
import bg from "./img/bg.jpg";
import Left from "./components/left/Left";
import "antd/dist/antd.css";
import { Layout } from 'antd';
import Right from "./components/right/Right";
const { Header, Sider, Content } = Layout;

const MyHeader = styled(Header)`
    height: 6rem;
    background: none;
    padding: 0;
`;

const MyLayout = styled(Layout)({
    'height':'100%',
    // 'padding-left':'0.5%',
    // 'padding-right':'0.5%',
    'background':'none'
});

const MySider = styled(Sider)({
    'height':'100%',
    // 'padding-left':'0.5%',
    // 'padding-right':'0.5%',
    'background':'none'
});


function BigScreen(props) {
    const {className} = props;

    return (
        <div id='bs' className={className}>
            <MyLayout >
                <MyHeader>
                    <Top/>
                </MyHeader>
                <MyLayout>
                    <MySider width={'26%'}>
                        <Left/>
                    </MySider>
                    <Content width={'48%'}>
                    </Content>
                    <MySider width={'26%'}>
                        <Right></Right>
                    </MySider>
                </MyLayout>
            </MyLayout>
        </div>
    )
}

export default styled(BigScreen)`
  position: relative;
  background: url(${bg}) no-repeat;
  background-size:100% 100%;
  height: 100%;
`;