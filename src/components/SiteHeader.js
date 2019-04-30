import React from "react";
import styled from "@emotion/styled";

import Brand from "./Brand";
import Navbar from "./Navbar";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
  position: relative;
  z-index: 1;
`;

const SiteHeader = () => (
  <Header>
    <Brand />
    <Navbar />
  </Header>
);

export default SiteHeader;
