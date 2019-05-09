import React from "react";
import styled from "@emotion/styled";

const StyledFormArea = styled.div`
  font-size: 1.25rem;
  color: #152540;
  letter-spacing: 0.15em;
  display: inline-block;
  width: ${props => (props.width ? props.width : "100%")};
  float: ${props => (props.float ? props.float : "none")};
  margin-bottom: 1.6em;
`;

const StyledFormError = styled.span`
  color: #ff7171;
  letter-spacing: 0.08em;
  margin-left: 0.5em;
`;

const FormArea = props => (
  <StyledFormArea width={props.width} float={props.float}>
    {props.label}
    {props.error ? (
      <StyledFormError>{`*${props.error}`}</StyledFormError>
    ) : null}
    {props.children}
  </StyledFormArea>
);

export default FormArea;
