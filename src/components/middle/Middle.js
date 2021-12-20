import React from "react";
import styled from "styled-components"
import Map from "./Map";
import Feedback from "./Feedback";

function Middle(props) {

    return (
        <>
            <Map/>
            <Feedback/>
        </>
    )
}

export default styled(Middle)`
    //background: none;
`;