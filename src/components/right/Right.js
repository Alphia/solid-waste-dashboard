import React from "react";
import styled from "styled-components"
import Distribution from "../left/Distribution";
import PeopleComment from "./PeopleComment";
import CommentsPercentage from "./CommentsPercentage";

function Right(props) {

    return (
        <>
            <PeopleComment/>
            <CommentsPercentage/>
            <Distribution/>
        </>
    )
}

export default styled(Right)`
    //background: none;
`;