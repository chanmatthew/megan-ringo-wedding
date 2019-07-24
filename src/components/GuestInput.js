import React from "react";
import styled from "@emotion/styled";

const StyledInputContainer = styled.div`
  margin-bottom: 0.67em;
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto;

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
      font-size: 1.25rem;
      background-color: rgba(250, 252, 254, 1);
      border: 1px dashed rgba(220, 223, 226, 1);
      border-radius: 0.25em;
      text-align: center;
      color: rgba(54, 63, 84, 0.4);
      padding: 0 1em;
      line-height: 2.7em;
      transition: all 0.2s ease;
      cursor: not-allowed;
    }

    &:hover::after {
      color: rgba(54, 63, 84, 0.7);
    }
  `}
`;

const StyledLabel = styled.label`
  position: relative;
  margin-right: 0.5em;
`;

const StyledGuestInput = styled.input`
  display: inline-block;
  font-size: 1.5rem;
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
  font-family: "Futura PT";
  font-size: 1.25rem;
  letter-spacing: 0.15em;
  display: inline-block;
  padding: 0.85em 1em;
  line-height: 1.25rem;
  background-color: rgba(240, 240, 245, 1);
  color: rgba(54, 63, 84, 0.4);
  border-radius: 0.25em;
  vertical-align: middle;
  transition: all 0.2s ease;
  opacity: ${props => (props.disabled ? "0" : "1")};

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
