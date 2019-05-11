import React from "react";
import styled from "@emotion/styled";

const StyledHeading = styled.h2`
  position: absolute;
  font-size: ${props => props.size || "1rem"};
  font-weight: bold;
  color: #868fa4;
  opacity: 0.4;
  width: ${props => props.width || "100%"};
  top: ${props => props.top || "auto"};
  bottom: ${props => props.bottom || "auto"};
  left: ${props => props.left || "auto"};
  right: ${props => props.right || "auto"};
  text-align: ${props => props.align || "left"};

  ${props =>
    props.withGraphic &&
    `
    &::after {
      position: absolute;
      content: "";
      background-image: url("/img/graphics/heading_hearts.svg");
      background-repeat: no-repeat;
      right: 5em;
      top: -1em;
      height: 12em;
      width: 8.625em;
    }
  `}
`;

const Heading = props => <StyledHeading {...props} />;

export default Heading;
