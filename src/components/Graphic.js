import React from "react";
import styled from "@emotion/styled";

const StyledImg = styled.img`
  position: ${props => (props.position ? props.position : "absolute")};
  top: ${props => (props.top ? props.top : "auto")};
  bottom: ${props => (props.bottom ? props.bottom : "auto")};
  left: ${props => (props.left ? props.left : "auto")};
  right: ${props => (props.right ? props.right : "auto")};
  transform: ${props => (props.transform ? props.transform : "none")};
  opacity: ${props => (props.opacity ? props.opacity : "1")};
`;

const Graphic = props => <StyledImg {...props} />;

export default Graphic;
