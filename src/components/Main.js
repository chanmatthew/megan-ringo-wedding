import React from "react";
import styled from "@emotion/styled";

const StyledMain = styled.main`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Main = props => <StyledMain {...props} />;

export default Main;
