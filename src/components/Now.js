import styled from "styled-components";
import React from "react";

export const Now = styled((props) => {
    const {className} = props;
    return (
        <div className={className}>
            {Date()}
        </div>
    )
})`
  color: #0efcff;
  margin-top: -3rem;
  float: left;
  width: 25%;
  margin-left:10rem;
  height: 100%;
`;