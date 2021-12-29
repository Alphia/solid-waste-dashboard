import styled from "styled-components"
import React from "react";
import Top from './components/top/Top';
import bg from "./img/bg.jpg";
import Left from "./components/left/Left";
import "antd/dist/antd.css";
import {Layout} from 'antd';
import Right from "./components/right/Right";
import Middle from "./components/middle/Middle";

const {Header, Sider} = Layout;

const MyHeader = styled(Header)`
    height: 6rem;
    background: none;
    padding: 0;
`;

const MyLayout = styled(Layout)({
    'height': '100%',
    'background': 'none',
    'width': '100%'
});

const MySider = styled(Sider)({
    'height': '100%',
    'margin-left': '0.8%',
    'margin-right': '0.8%',
    'background': 'none'
});

const MyContent = styled(Sider)`
  height: 100%;
  background: none
`

function BigScreen(props) {
    const {className} = props;

    return (
        <div id='bs' className={className}>
            <MyLayout>
                <MyHeader>
                    <Top/>
                </MyHeader>
                <MyLayout>
                    <MySider width={'26%'}>
                        <Left/>
                    </MySider>
                    <MyContent width={'44.8%'}>
                        <Middle/>
                    </MyContent>
                    <MySider width={'26%'}>
                        <Right/>
                    </MySider>
                </MyLayout>
            </MyLayout>
        </div>
    )
}

export default styled(BigScreen)`
  position: relative;
  background: url(${bg}) no-repeat;
  background-size: 100% 100%;
  height: 100%;
`;