import React, { Component } from "react";
import styled from "@emotion/styled/macro";
import shortid from "shortid";

import Guest from "./Guest";
import GuestInput from "./GuestInput";

const StyledGuestContainer = styled.div`
  margin-top: 1em;
`;

const StyledGuestList = styled.div`
  display: block;
  border-radius: 0.25em;
  overflow: hidden;
`;

class Guests extends Component {
  nameRef = null;

  state = {
    inputError: null
  };

  setInputRef = ref => {
    this.nameRef = ref;
  };

  handleClearInput = () => {
    this.nameRef.value = "";
    this.setState({
      inputError: null
    });
  };

  handleAddGuest = () => {
    const { handleAddGuest } = this.props;

    if (this.nameRef.value) {
      if ([...this.nameRef.value].length <= 42) {
        let newGuest = { id: shortid.generate(), name: this.nameRef.value };
        handleAddGuest(newGuest);
        this.handleClearInput();
      } else {
        this.setState({
          inputError: "Limit exceeded"
        });
      }
    } else {
      this.setState({
        inputError: "Field empty"
      });
    }
  };

  render() {
    const { guests, handleRemoveGuest, maxGuests } = this.props;
    const { inputError } = this.state;

    return (
      <StyledGuestContainer>
        {guests.length > 0 ? (
          <StyledGuestList>
            {guests.map(guest => (
              <Guest
                key={guest.id}
                guestId={guest.id}
                guestName={guest.name}
                handleRemoveGuest={handleRemoveGuest}
              />
            ))}
          </StyledGuestList>
        ) : null}
        <GuestInput
          setInputRef={this.setInputRef}
          handleAddGuest={this.handleAddGuest}
          error={inputError}
          disabled={guests.length >= maxGuests}
          maxGuests={maxGuests}
        />
      </StyledGuestContainer>
    );
  }
}

export default Guests;
