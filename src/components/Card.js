import React from "react";
import styled from "@emotion/styled/macro";

const StyledCard = styled.div`
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  letter-spacing: 0.15em;
  margin-bottom: 5em;
`;

const StyledCardImage = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  height: 17em;
  width: 17em;
  background-image: ${props => `url(${props.src})` || "none"};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledCardName = styled.div`
  font-size: 1.5rem;
  background-color: rgba(255, 255, 255, 0.8);
  color: rgba(54, 63, 84, 1);
  width: 100%;
  line-height: 2em;
  text-align: center;
  text-transform: uppercase;
`;

const Card = props => (
  <StyledCard>
    <StyledCardImage src={props.src} />
    <StyledCardName>{props.name}</StyledCardName>
    {props.children}
  </StyledCard>
);

export default Card;
