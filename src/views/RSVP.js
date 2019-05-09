import React, { Component } from "react";
import styled from "@emotion/styled";

import { AppContext } from "../AppProvider";
import Main from "../components/Main";
import Article from "../components/Article";
import Heading from "../components/Heading";
import FormArea from "../components/FormArea";

const StyledRSVPForm = styled.form`
  position: absolute;
  top: 14em;
  left: 3em;
  width: 85%;
`;

const StyledFormInput = styled.input`
  font-size: 1.5rem;
  background-color: ${props =>
    props.error ? "rgba(255, 113, 113, 0.1)" : "#fafcfe"};
  border: 1px solid ${props => (props.error ? "#FF7171" : "#e6e9ec")};
  border-radius: 0.125em;
  height: 2.25em;
  width: 100%;
  padding: 0 0.5em;
  display: block;
  margin-top: 0.67em;
  outline: none;

  &:focus {
    border: 1px solid #152540;
  }
`;

const StyledFormTextArea = styled.textarea`
  font-size: 1.5rem;
  background-color: #fafcfe;
  border: 1px solid #e6e9ec;
  border-radius: 0.125em;
  height: 6.83em;
  width: 100%;
  padding: 0.5em;
  display: block;
  margin-top: 0.67em;
  resize: none;
  outline: none;

  &:focus {
    border: 1px solid #152540;
  }
`;

const StyledFootnote = styled.p`
  color: #152540;
  opacity: 0.5;
  letter-spacing: 0.0625em;
  display: inline-block;
  position: absolute;
  left: 0;
  bottom: -2.6em;
`;

const StyledSubmitButton = styled.button`
  font-family: "Futura PT";
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: 0.15em;
  color: white;
  background-color: #152540;
  padding: 1em 1.8em;
  border-radius: 5em;
  display: inline-block;
  border: none;
  outline: none;
  position: absolute;
  right: 0;
  bottom: -3.3125em;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

class RSVP extends Component {
  formRefs = {
    firstName: null,
    lastName: null,
    email: null,
    accommodations: null,
    message: null
  };

  state = {
    formErrors: {
      firstName: null,
      lastName: null,
      email: null
    }
  };

  componentDidMount() {
    this.props.handleIsBrandDark(false);
    this.props.handleIsNavbarDark(true);
  }

  handleOnSubmit = e => {
    e.preventDefault();

    this.setState(
      {
        formErrors: {
          firstName: this.formRefs.firstName.value ? null : "Required",
          lastName: this.formRefs.lastName.value ? null : "Required",
          email: this.formRefs.email.value
            ? !this.formRefs.email.value.match(
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
          console.log("Error(s) found in form");
        } else {
          console.log("Form submitted!");
        }
      }
    );
  };

  render() {
    return (
      <Main>
        <Article left view="0">
          <img src="/img/photos/stock_blue_flowers.png" alt="Blue Flowers" />
        </Article>
        <Article right view="0" wide={true}>
          <Heading
            size="3.75rem"
            top="2em"
            left="0.8em"
            width="calc(100% - 0.8em)"
          >
            LET'S CELEBRATE!
          </Heading>
          <StyledRSVPForm>
            <FormArea
              width="15.125em"
              label="FIRST NAME"
              error={this.state.formErrors.firstName}
            >
              <StyledFormInput
                type="text"
                ref={node => (this.formRefs.firstName = node)}
                error={this.state.formErrors.firstName}
              />
            </FormArea>
            <FormArea
              width="15.125em"
              float="right"
              label="LAST NAME"
              error={this.state.formErrors.lastName}
            >
              <StyledFormInput
                type="text"
                ref={node => (this.formRefs.lastName = node)}
                error={this.state.formErrors.lastName}
              />
            </FormArea>
            <FormArea
              label="E-MAIL ADDRESS"
              error={this.state.formErrors.email}
            >
              <StyledFormInput
                type="email"
                ref={node => (this.formRefs.email = node)}
                error={this.state.formErrors.email}
              />
            </FormArea>
            <FormArea label="ACCOMMODATIONS">
              <StyledFormTextArea
                type="text"
                ref={node => (this.formRefs.accommodations = node)}
              />
            </FormArea>
            <FormArea label="MESSAGE TO THE COUPLE">
              <StyledFormTextArea
                type="text"
                ref={node => (this.formRefs.message = node)}
              />
            </FormArea>
            <StyledFootnote>KINDLY RESPOND BY OCTOBER 5, 2019</StyledFootnote>
            <StyledSubmitButton onClick={this.handleOnSubmit}>
              SUBMIT
            </StyledSubmitButton>
          </StyledRSVPForm>
        </Article>
      </Main>
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
