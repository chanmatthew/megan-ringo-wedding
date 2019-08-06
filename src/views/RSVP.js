import React, { Component } from "react";
import styled from "@emotion/styled/macro";
import axios from "axios";

import { AppContext } from "../AppProvider";
import FormArea from "../components/FormArea";
import Guests from "../components/Guests";
import Loading from "../components/Loading";
import ConfirmationModal from "../components/ConfirmationModal";
import { MIN_WIDTH_BREAKPOINTS } from "../enums";

const [
  ,
  ,
  POST_IPHONE6_PORTRAIT_UP,
  ,
  ,
  SMALL_DEVICES_LANDSCAPE_UP,
  BETWEEN_SMALL_DEVICES_TABLET_UP,
  TABLET_PORTRAIT_UP,
  TABLET_LANDSCAPE_UP
] = MIN_WIDTH_BREAKPOINTS;

const StyledMain = styled.main`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
`;

const StyledPageHeaderImage = styled.div`
  position: relative;
  width: 100%;
  background-image: url(${props => props.src || "none"});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(21, 37, 64, 1);
  height: 15em;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    height: 20em;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    height: 25em;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    height: 31.375em;
  }
`;

const StyledPageTitle = styled.h1`
  position: absolute;
  left: 50%;
  bottom: 0;
  padding: 0.5em 1em;
  letter-spacing: 0.083em;
  background-color: white;
  color: rgba(54, 63, 84, 1);
  transform: translate3d(-50%, 50%, 0);
  box-shadow: 0 5px 10px 0 rgba(37, 41, 82, 0.1);
  font-size: 1.25rem;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    font-size: 1.625rem;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    font-size: 1.75rem;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    font-size: 2rem;
  }
`;

const StyledPageSection = styled.section`
  padding-bottom: 1em;
  background-color: white;
`;

const StyledPageDescription = styled.h2`
  letter-spacing: 0.083em;
  text-align: center;
  color: rgba(54, 63, 84, 1);
  width: 90%;
  line-height: 1.2;
  margin: 2.5em auto 0.7em;
  font-size: 1.5rem;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 1.75rem;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    font-size: 1.875rem;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    line-height: 1;
    width: auto;
    font-size: 2rem;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    font-size: 2.25rem;
  }
`;

const StyledSubDescription = styled.h3`
  margin-bottom: 1.5em;
  color: rgba(21, 37, 64, 0.5);
  text-align: center;
  letter-spacing: 0.0625em;
  font-size: 0.875rem;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    font-size: 1.2rem;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    font-size: 1.25rem;
  }
`;

const StyledRSVPForm = styled.form`
  position: relative;
  max-width: 50em;
  margin: 0 auto;
  border: 1px solid
    ${props =>
      props.error ? "rgba(255, 113, 113, 1)" : "rgba(255, 113, 113, 0)"};
  border-radius: 0.125em;
  transition: border 0.2s ease;
  width: 95%;
  padding: 1.5em 1em;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    padding: 2em 1.5em;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    padding: 2em;
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    width: 90%;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    width: 87.5%;
    padding: 3em;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    width: 75%;
  }
`;

const StyledNameFormArea = styled(FormArea)`
  width: 100%;

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    width: 48%;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    width: 46%;
  }
`;

const StyledFormInput = styled.input`
  display: block;
  height: 2.25em;
  width: 100%;
  padding: 0 0.5em;
  margin-top: 0.67em;
  outline: none;
  background-color: ${props =>
    props.error ? "rgba(255, 113, 113, 0.1)" : "rgba(250, 252, 254, 1)"};
  border: 1px solid
    ${props =>
      props.error ? "rgba(255, 113, 113, 1)" : "rgba(220, 223, 226, 1)"};
  border-radius: 0.125em;
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
`;

const StyledFormTextArea = styled.textarea`
  display: block;
  height: 8em;
  width: 100%;
  padding: 0.5em;
  margin-top: 0.67em;
  background-color: rgba(250, 252, 254, 1);
  outline: none;
  resize: none;
  border: 1px solid rgba(220, 223, 226, 1);
  border-radius: 0.125em;
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
`;

const StyledSubmitButton = styled.button`
  position: relative;
  font-family: "Futura PT";
  font-weight: bold;
  letter-spacing: 0.15em;
  display: block;
  padding: 1em 1.8em;
  margin: 0 auto;
  color: rgba(246, 233, 203, 1);
  background-color: rgba(21, 37, 64, 1);
  box-shadow: none;
  border-radius: 5em;
  border: none;
  outline: none;
  transform: translate3d(0, 0, 0);
  transition: all 0.2s ease;
  font-size: 0.875rem;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    font-size: 1.1rem;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    font-size: 1.1875rem;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    font-size: 1.25rem;
  }

  &:hover {
    cursor: pointer;
    background-color: rgba(21, 37, 64, 0.9);
    box-shadow: 0 5px 10px 0 rgba(37, 41, 82, 0.3);
    transform: translate3d(0, -0.2em, 0);
  }

  &:active {
    background-color: rgba(21, 37, 64, 1);
    box-shadow: none;
    transform: translate3d(0, 0, 0);
  }
`;

const StyledButtonSpan = styled.span`
  opacity: ${props => (props.submitting ? "0" : "1")};
`;

const StyledFormError = styled.span`
  position: absolute;
  letter-spacing: 0.08em;
  color: rgba(255, 113, 113, 1);
  opacity: ${props => (props.visible ? "1" : "0")};
  white-space: nowrap;
  transition: opacity 0.2s ease;
  font-size: 0.75rem;
  right: 0.5em;
  bottom: 0.5em;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    right: 1em;
    bottom: 1em;
    font-size: 0.875rem;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    font-size: 1.25rem;
  }
`;

const maxGuests = 10;
const maxMessageLength = 500;

class RSVP extends Component {
  formRefs = {
    firstName: null,
    lastName: null,
    emailAddress: null,
    message: null
  };

  state = {
    formErrors: {
      firstName: null,
      lastName: null,
      emailAddress: null
    },
    guests: [],
    messageRemainingLength: maxMessageLength,
    submittingForm: false,
    isModalShown: false
  };

  componentDidMount() {
    const { handleIsBrandDark, handleIsNavbarDark } = this.props;
    handleIsBrandDark(false);
    handleIsNavbarDark(false);
  }

  handleAddGuest = newGuest => {
    this.setState(({ guests }) => ({
      guests: guests.concat([newGuest])
    }));
  };

  handleRemoveGuest = guestID => {
    this.setState(({ guests }) => ({
      guests: guests.filter(guest => guest.id !== guestID)
    }));
  };

  handleCalcRemainingCharacters = () => {
    this.setState({
      messageRemainingLength:
        maxMessageLength - this.formRefs.message.value.length
    });
  };

  clearForm = () => {
    for (let formRef of Object.keys(this.formRefs)) {
      this.formRefs[formRef].value = "";
    }
    this.setState({
      guests: [],
      messageRemainingLength: maxMessageLength,
      submittingForm: false
    });
  };

  createFormJson = () => {
    const { firstName, lastName, emailAddress, message } = this.formRefs;

    let formJson = {
      firstName: firstName.value,
      lastName: lastName.value,
      emailAddress: emailAddress.value,
      guests: this.state.guests.reduce(
        (acc, guest) => acc.concat([guest.name]),
        []
      ),
      message: message.value.replace(/\s\s+/g, " ")
    };
    return formJson;
  };

  handleOnSubmit = e => {
    e.preventDefault();

    const { firstName, lastName, emailAddress } = this.formRefs;

    this.setState(
      {
        formErrors: {
          firstName: firstName.value
            ? [...firstName.value].length > 42
              ? "Limit exceeded"
              : null
            : "Required",
          lastName: lastName.value
            ? [...lastName.value].length > 42
              ? "Limit exceeded"
              : null
            : "Required",
          emailAddress: emailAddress.value
            ? [...emailAddress.value].length > 100
              ? "Limit exceeded"
              : !emailAddress.value.match(
                  /^\w[.!#$%&'*+-/=?^_`{|}~\w]*@[-\w]+\.[\w]+$/gi
                )
              ? "Invalid E-mail"
              : null
            : "Required"
        }
      },
      () => {
        if (
          Object.keys(this.state.formErrors).some(
            input => this.state.formErrors[input]
          )
        ) {
          console.error("Error(s) found in form.");
        } else {
          this.setState(
            {
              submittingForm: true
            },
            () => {
              axios
                .post("http://localhost:3001/rsvp", this.createFormJson())
                .then(() => {
                  this.setState(
                    {
                      submittingForm: false,
                      isModalShown: true
                    },
                    () => {
                      document.body.className += " unscrollable";
                    }
                  );
                })
                .catch(err => {
                  this.setState(
                    {
                      submittingForm: false
                    },
                    () => {
                      console.error(
                        "Form could not be submitted due to error: ",
                        err
                      );
                      alert("Form could not be submitted due to error.");
                    }
                  );
                });
            }
          );
        }
      }
    );
  };

  handleCloseModal = () => {
    this.setState(
      {
        isModalShown: false
      },
      () => {
        document.body.className = document.body.className.replace(
          /\bunscrollable\b/g,
          ""
        );
        this.clearForm();
      }
    );
  };

  render() {
    const { firstName, lastName, emailAddress, message } = this.formRefs;
    const {
      formErrors,
      guests,
      messageRemainingLength,
      submittingForm,
      isModalShown
    } = this.state;

    return (
      <StyledMain>
        <StyledPageHeaderImage src="/img/photos/stock_blue_flowers.jpg">
          <StyledPageTitle>RSVP</StyledPageTitle>
        </StyledPageHeaderImage>
        <StyledPageSection>
          <StyledPageDescription>
            WE'RE EXCITED TO CELEBRATE WITH YOU!
          </StyledPageDescription>
          <StyledSubDescription>
            KINDLY RESPOND BY OCTOBER 5, 2019
          </StyledSubDescription>
          <StyledRSVPForm
            noValidate
            onSubmit={this.handleOnSubmit}
            error={Object.keys(formErrors).some(input => formErrors[input])}
          >
            <StyledNameFormArea
              label="FIRST NAME"
              error={formErrors.firstName}
              inputId="firstName"
            >
              <StyledFormInput
                type="text"
                ref={node => (this.formRefs.firstName = node)}
                error={formErrors.firstName}
                id="firstName"
                name="firstName"
                onKeyPress={e => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                  }
                }}
              />
            </StyledNameFormArea>
            <StyledNameFormArea
              float="right"
              label="LAST NAME"
              error={formErrors.lastName}
              inputId="lastName"
            >
              <StyledFormInput
                type="text"
                ref={node => (this.formRefs.lastName = node)}
                error={formErrors.lastName}
                id="lastName"
                name="lastName"
                onKeyPress={e => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                  }
                }}
              />
            </StyledNameFormArea>
            <FormArea
              label="E-MAIL ADDRESS"
              error={formErrors.emailAddress}
              inputId="emailAddress"
            >
              <StyledFormInput
                type="email"
                ref={node => (this.formRefs.emailAddress = node)}
                error={formErrors.emailAddress}
                id="emailAddress"
                name="emailAddress"
                onKeyPress={e => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                  }
                }}
              />
            </FormArea>
            <FormArea label="GUESTS">
              <Guests
                guests={guests}
                handleAddGuest={this.handleAddGuest}
                handleRemoveGuest={this.handleRemoveGuest}
                maxGuests={maxGuests}
              />
            </FormArea>
            <FormArea
              label="MESSAGE TO THE COUPLE"
              subLabel={`(${messageRemainingLength})`}
              subLabelError={messageRemainingLength <= 0}
              inputId="message"
            >
              <StyledFormTextArea
                type="text"
                ref={node => (this.formRefs.message = node)}
                id="message"
                name="message"
                maxLength={maxMessageLength}
                onChange={this.handleCalcRemainingCharacters}
              />
            </FormArea>
            <StyledSubmitButton type="submit">
              <StyledButtonSpan submitting={submittingForm}>
                SUBMIT
              </StyledButtonSpan>
              {submittingForm ? <Loading /> : null}
            </StyledSubmitButton>
            <StyledFormError
              visible={Object.keys(formErrors).some(input => formErrors[input])}
            >
              *Errors found in form
            </StyledFormError>
          </StyledRSVPForm>
          <ConfirmationModal
            opened={isModalShown}
            handleCloseModal={this.handleCloseModal}
            firstName={firstName && firstName.value}
            lastName={lastName && lastName.value}
            emailAddress={emailAddress && emailAddress.value}
            guests={guests.reduce((acc, guest) => acc.concat([guest.name]), [])}
            message={message && message.value}
          />
        </StyledPageSection>
      </StyledMain>
    );
  }
}

export default props => (
  <AppContext.Consumer>
    {({ handleIsBrandDark, handleIsNavbarDark }) => (
      <RSVP
        {...props}
        handleIsBrandDark={handleIsBrandDark}
        handleIsNavbarDark={handleIsNavbarDark}
      />
    )}
  </AppContext.Consumer>
);
