import React from "react";
import styled from "@emotion/styled";

const StyledHeading = styled.h2`
  position: absolute;
  font-size: ${props => (props.size ? props.size : "1rem")};
  font-weight: bold;
  color: #868fa4;
  opacity: 0.4;
  width: ${props => (props.width ? props.width : "100%")};
  top: ${props => (props.top ? props.top : "auto")};
  bottom: ${props => (props.bottom ? props.bottom : "auto")};
  left: ${props => (props.left ? props.left : "auto")};
  right: ${props => (props.right ? props.right : "auto")};
  text-align: ${props => (props.align ? props.align : "left")};

  &.heading--with-graphic::after {
    position: absolute;
    content: "";
    background-image: url("/img/graphics/heading_hearts.svg");
    background-repeat: no-repeat;
    right: 5em;
    top: -1em;
    height: 12em;
    width: 8.625em;
  }
`;

const Heading = props => <StyledHeading {...props} />;

export default Heading;
