import React from "react";
import styled from "@emotion/styled";

const StyledLabelSection = styled.section`
  position: absolute;
  top: ${props => (props.top ? props.top : "auto")};
  bottom: ${props => (props.bottom ? props.bottom : "auto")};
  left: ${props => (props.left ? props.left : "auto")};
  right: ${props => (props.right ? props.right : "auto")};
`;

const StyledCategory = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  color: #868fa4;
  opacity: 0.4;
  letter-spacing: 0.03em;
  padding-bottom: 1rem;
`;

const StyledTitle = styled.h3`
  font-size: 3.75rem;
  font-weight: bold;
  color: #152540;
  padding-bottom: 1rem;
`;

const StyledDescription = styled.h4`
  font-size: 2.25rem;
  color: #152540;
  line-height: 1.33em;
`;

const LabelSection = props => (
  <StyledLabelSection {...props}>
    <StyledCategory>{props.category}</StyledCategory>
    <StyledTitle>{props.title}</StyledTitle>
    <StyledDescription>{props.children}</StyledDescription>
  </StyledLabelSection>
);

export default LabelSection;
