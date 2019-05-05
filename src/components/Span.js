import React from "react";
import styled from "@emotion/styled";

const StyledHeadingSpan = styled.span`
  font-size: ${props => (props.size ? `${props.size * 6.25}rem` : "6.25rem")};
  line-height: ${props => (props.size ? `${props.size * 6.25}rem` : "6.25rem")};
  opacity: ${props => (props.size ? `${props.size * 1}` : "1")};
`;

const Span = props => <StyledHeadingSpan {...props} />;

export default Span;
