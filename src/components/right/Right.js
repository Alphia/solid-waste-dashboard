import React from "react";
import styled from "styled-components"
import PeopleComment from "./PeopleComment";
import CommentsPercentage from "./CommentsPercentage";
import Ranking from "./Ranking";

function Right(props) {

    return (
        <>
            <PeopleComment/>
            <CommentsPercentage/>
            <Ranking/>
        </>
    )
}

export default styled(Right)`
    //background: none;
`;