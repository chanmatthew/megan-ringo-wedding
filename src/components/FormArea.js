import React from "react";
import styled from "@emotion/styled/macro";
import { MIN_WIDTH_BREAKPOINTS } from "../enums";

const [
  ,
  ,
  POST_IPHONE6_PORTRAIT_UP,
  ,
  ,
  SMALL_DEVICES_LANDSCAPE_UP,
  ,
  TABLET_PORTRAIT_UP,
  TABLET_LANDSCAPE_UP
] = MIN_WIDTH_BREAKPOINTS;

const StyledFormArea = styled.div`
  color: rgba(54, 63, 84, 1);
  display: inline-block;
  float: ${props => props.float || "none"};
  width: 100%;
  margin-bottom: 2em;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    margin-bottom: 2.75em;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    margin-bottom: 3.125em;
  }
`;

const StyledLabel = styled.label`
  letter-spacing: 0.15em;
  font-size: 1rem;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 1.15rem;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    font-size: 1.2125rem;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    font-size: 1.25rem;
  }
`;

const StyledFormError = styled.span`
  color: rgba(255, 113, 113, 1);
  letter-spacing: 0.08em;
  margin: 0 0 0 0.5em;
  display: inline;

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) and (max-width: ${TABLET_LANDSCAPE_UP -
      1}px) {
    margin: 0.5em 0 0 0;
    display: block;
  }
`;

const StyledSubLabel = styled.small`
  opacity: ${props => (props.error ? "0.7" : "0.4")};
  letter-spacing: 0.05em;
  font-size: 80%;
  color: ${props =>
    props.error ? "rgba(255, 113, 113, 1)" : "rgba(54, 63, 84, 1)"};
`;

const FormArea = ({
  float,
  inputId,
  label,
  subLabel,
  subLabelError,
  error,
  children,
  className
}) => (
  <StyledFormArea className={className} float={float}>
    <StyledLabel htmlFor={inputId}>
      {label}
      {subLabel ? (
        <StyledSubLabel error={subLabelError}> {subLabel}</StyledSubLabel>
      ) : null}
    </StyledLabel>
    {error ? <StyledFormError>{`*${error}`}</StyledFormError> : null}
    {children}
  </StyledFormArea>
);

export default FormArea;
