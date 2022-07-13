import React from "react";
import styled from "styled-components"
import Past6MonthsReport from "./Past6MonthsReport";
import Past6MonthsReport2 from "./Past6MonthsReport2";
import Past6MonthsReport3 from "./Past6MonthsReport3";
import ThisYearReport from "./ThisYearReport";
import Distribution from "./Distribution";

function Left(props) {

    return (
        <>
            {/*<ThisYearReport/>*/}
            <Past6MonthsReport/>
            <Past6MonthsReport2/>
            <Past6MonthsReport3/>
            {/*<Distribution/>*/}
        </>
    )
}

// export default styled(Left2)
export default styled(Left)`
    //background: none;
`;