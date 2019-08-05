import React from "react";
import styled from "@emotion/styled/macro";

const StyledFormArea = styled.div`
  font-size: 1.25rem;
  color: rgba(54, 63, 84, 1);
  letter-spacing: 0.15em;
  display: inline-block;
  width: ${props => props.width || "100%"};
  float: ${props => props.float || "none"};
  margin-bottom: 2.5em;
`;

const StyledFormError = styled.span`
  color: rgba(255, 113, 113, 1);
  letter-spacing: 0.08em;
  margin-left: 0.5em;
`;

const StyledSubLabel = styled.small`
  opacity: ${props => (props.error ? "0.7" : "0.4")};
  letter-spacing: 0.05em;
  color: ${props =>
    props.error ? "rgba(255, 113, 113, 1)" : "rgba(54, 63, 84, 1)"};
`;

const FormArea = ({
  width,
  float,
  inputId,
  label,
  subLabel,
  subLabelError,
  error,
  children
}) => (
  <StyledFormArea width={width} float={float}>
    <label htmlFor={inputId}>
      {label}
      {subLabel ? (
        <StyledSubLabel error={subLabelError}> {subLabel}</StyledSubLabel>
      ) : null}
    </label>
    {error ? <StyledFormError>{`*${error}`}</StyledFormError> : null}
    {children}
  </StyledFormArea>
);

export default FormArea;
