import React from "react";
import styled from "@emotion/styled";

const StyledHeading = styled.h2`
  position: absolute;
  font-weight: bold;
  color: #868fa4;
  opacity: 0.4;
  top: ${props => (props.top ? props.top : "auto")};
  bottom: ${props => (props.bottom ? props.bottom : "auto")};
  left: ${props => (props.left ? props.left : "auto")};
  right: ${props => (props.right ? props.right : "auto")};
  text-align: ${props => (props.align ? props.align : "left")};

  &::after {
    position: absolute;
    content: "";
    background-image: linear-gradient(
      rgba(237, 211, 151, 0),
      rgba(237, 211, 151, 1),
      rgba(60, 98, 162, 1),
      rgba(237, 211, 151, 1),
      rgba(237, 211, 151, 0)
    );
    height: 12em;
    width: 5px;
    right: -6em;
    top: -1em;
    opacity: 0.5;
  }
`;

const Heading = props => <StyledHeading {...props} />;

export default Heading;
