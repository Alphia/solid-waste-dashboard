import styled from "styled-components"
import React from "react";
import Top from './components/Top';
import bg from "./img/bg.jpg";
import Left from "./components/Left";

function BigScreen(props) {
    const {className} = props;

    return (
        <div id='bs' className={className}>
            <Top></Top>
            <Left>

            </Left>
            {/*<Middle>*/}

            {/*</Middle>*/}
            {/*<Right>*/}

            {/*</Right>*/}
        </div>
    )
}

export default styled(BigScreen)`
  position: relative;
  background: url(${bg}) no-repeat;
  background-size:100% 100%;
`;