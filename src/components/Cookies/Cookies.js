import React from "react";
import { ContentContainer } from "../Page/Page.styles";
import { CookiesContainer } from "./Cookies.styles";

const Cookies = props => {
  return (
    <CookiesContainer {...props}>
      <ContentContainer>This is some meaningless info about cookies that should never be here in a first place.</ContentContainer>
    </CookiesContainer>
  );
};

export default Cookies;
