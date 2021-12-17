import React from "react";
import styled from "styled-components"
import Past6MonthsReport from "./Past6MonthsReport";
import ThisYearReport from "./ThisYearReport";

function Left(props) {

    return (
        <>
            <ThisYearReport/>
            <Past6MonthsReport/>
        </>
    )
}

// export default styled(Left2)
export default styled(Left)`
    //background: none;
`;