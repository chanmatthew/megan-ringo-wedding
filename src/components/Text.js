import React from "react";
import styled from "@emotion/styled";

const StyledP = styled.p`
  font-size: 2.2rem;
  letter-spacing: 0.03em;
  line-height: 1.17em;
  color: #363f54;
  width: ${props => (props.width ? props.width : "88%")};
  position: absolute;
  top: ${props => (props.top ? props.top : "auto")};
  bottom: ${props => (props.bottom ? props.bottom : "auto")};
  left: ${props => (props.left ? props.left : "auto")};
  right: ${props => (props.right ? props.right : "auto")};
  text-align: ${props => (props.align ? props.align : "left")};
  font-style: ${props => (props.quote ? "italic" : "normal")};
`;

const Text = props => <StyledP {...props} />;

export default Text;
