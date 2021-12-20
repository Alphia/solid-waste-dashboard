import React from "react";
import styled from "styled-components"
import Past6MonthsReport from "./Past6MonthsReport";
import ThisYearReport from "./ThisYearReport";
import Distribution from "./Distribution";

function Left(props) {

    return (
        <>
            <ThisYearReport/>
            <Past6MonthsReport/>
            <Distribution/>
        </>
    )
}

// export default styled(Left2)
export default styled(Left)`
    //background: none;
`;