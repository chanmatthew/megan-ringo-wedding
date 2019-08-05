import React from "react";
import styled from "@emotion/styled/macro";

import AnimatedHoc from "./AnimatedHoc";

const StyledHeading = styled.h2`
  font-weight: bold;
  display: inline-block;
  color: ${props => props.color || "#868fa4"};
  font-size: ${props => props.size || "1rem"};
  text-align: ${props => props.align || "left"};

  ${props =>
    props.withUnderline &&
    `
    &::after {
      position: absolute;
      content: "";
      border-bottom: 0.125em solid ${props.underlineColor ||
        "rgba(134, 140, 164, 0.7)"};
      width: 100%;
      bottom: -0.5em;
      left: 0;
    }
  `}
`;

const Heading = props => <StyledHeading {...props} />;

export default AnimatedHoc(Heading);
