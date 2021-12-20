import React from "react";
import styled from "styled-components"
import Past6MonthsReport from "./Past6MonthsReport";
import Distribution from "./Distribution";
import PeopleComment from "./PeopleComment";

function Right(props) {

    return (
        <>
            <PeopleComment/>
            <Past6MonthsReport/>
            <Distribution/>
        </>
    )
}

// export default styled(Left2)
export default styled(Right)`
    //background: none;
`;