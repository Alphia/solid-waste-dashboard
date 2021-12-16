import React from "react";
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
export default Left;