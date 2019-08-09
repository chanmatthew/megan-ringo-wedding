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

const StyledInputContainer = styled.div`
  margin-bottom: 0.67em;
  position: relative;
  display: flex;

  ${props =>
    props.disabled &&
    `
    &::after {
      position: absolute;
      content: "MAX ${props.maxGuests} GUESTS";
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(250, 252, 254, 1);
      border: 1px dashed rgba(220, 223, 226, 1);
      border-radius: 0.25em;
      text-align: center;
      color: rgba(54, 63, 84, 0.4);
      padding: 0 1em;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.2s ease;
      cursor: not-allowed;
      font-size: 1rem;

      @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
        font-size: 1.1rem;
      }

      @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
        font-size: 1.15rem;
      }

      @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
        font-size: 1.2rem;
      }

      @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
        font-size: 1.25rem;
      }
    }

    &:hover::after {
      color: rgba(54, 63, 84, 0.7);
    }
  `}
`;

const StyledLabel = styled.label`
  position: relative;
  margin-right: 0.5em;
  width: 100%;
`;

const StyledGuestInput = styled.input`
  font-family: Helvetica, "Futura PT", Arial, sans-serif;
  background-color: ${props =>
    props.error ? "rgba(255, 113, 113, 0.1)" : "rgba(250, 252, 254, 1)"};
  border: 1px solid
    ${props =>
      props.error ? "rgba(255, 113, 113, 1)" : "rgba(220, 223, 226, 1)"};
  border-radius: 0.125em;
  height: 2.25em;
  width: 100%;
  padding: 0 0.5em;
  vertical-align: middle;
  outline: none;
  opacity: ${props => (props.disabled ? "0" : "1")};
  appearance: none;
  font-size: 1.1rem;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 1.2rem;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    font-size: 1.3rem;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    font-size: 1.4rem;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    font-size: 1.5rem;
  }

  &:focus {
    background-color: white;
    border: 1px solid rgba(21, 37, 64, 1);
  }

  &::placeholder {
    opacity: 0.4;
  }
`;

const StyledInputError = styled.span`
  position: absolute;
  bottom: -2em;
  right: 0;
  padding: 0 0.5em;
  color: rgba(255, 113, 113, 1);
  letter-spacing: 0.08em;
  line-height: 1.8em;
  white-space: nowrap;
`;

const StyledAddButton = styled.button`
  outline: none;
  border: none;
  font-family: "Futura PT", Helvetica, Arial, sans-serif;
  line-height: 1.25rem;
  letter-spacing: 0.15em;
  background-color: rgba(240, 240, 245, 1);
  color: rgba(54, 63, 84, 0.4);
  border-radius: 0.25em;
  vertical-align: middle;
  transition: all 0.2s ease;
  opacity: ${props => (props.disabled ? "0" : "1")};
  padding: 0.6em 1em;
  font-size: 1rem;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    padding: 0.625em 1em;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    padding: 0.75em 1em;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    padding: 0.85em 1em;
    font-size: 1.1rem;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    font-size: 1.25rem;
  }

  &:hover,
  &:focus {
    background-color: rgba(176, 246, 172, 1);
    color: rgba(21, 37, 64, 1);
    cursor: pointer;
  }
`;

const GuestInput = ({
  maxGuests,
  disabled,
  error,
  setInputRef,
  handleAddGuest
}) => (
  <StyledInputContainer maxGuests={maxGuests} disabled={disabled}>
    <StyledLabel>
      <StyledGuestInput
        placeholder="Guest name"
        ref={node => setInputRef(node)}
        error={error}
        onKeyPress={e => {
          if (e.which === 13 || e.keycode === 13 || e.key === "Enter") {
            e.preventDefault();
            if (!disabled) {
              handleAddGuest();
            }
          }
        }}
        disabled={disabled}
      />
      {error ? <StyledInputError>* {error}</StyledInputError> : null}
    </StyledLabel>
    <StyledAddButton type="button" disabled={disabled} onClick={handleAddGuest}>
      ADD
    </StyledAddButton>
  </StyledInputContainer>
);

export default GuestInput;
