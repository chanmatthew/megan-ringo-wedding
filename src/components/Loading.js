import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

const lineScale = keyframes`
  0% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0.4);
  }
  100% {
    transform: scaleY(1);
  }
`;

const StyledLoadBarContainer = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 2.5em;
  height: 1.5em;
  display: flex;
  justify-content: space-between;
`;

const StyledLoadBar = styled.span`
  background-color: rgba(246, 233, 203, 1);
  width: 10%;
  height: 100%;
  border-radius: 2px;
  animation-fill-mode: both;
  display: inline-block;
  animation: ${lineScale} 1.2s
    ${props => (props.delay ? `${props.delay * -0.16}s` : "0s")} infinite
    ease-in;
`;

const Loading = () => (
  <StyledLoadBarContainer>
    <StyledLoadBar delay={4} />
    <StyledLoadBar delay={3} />
    <StyledLoadBar delay={2} />
    <StyledLoadBar delay={1} />
    <StyledLoadBar delay={0} />
  </StyledLoadBarContainer>
);

export default Loading;
