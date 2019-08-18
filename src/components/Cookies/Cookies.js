import React, { useEffect, useState } from "react";
import { ContentContainer } from "../Page/Page.styles";
import { CookiesContainer } from "./Cookies.styles";
import { timedoutPromise } from "../../helpers/timedoutPromise";

const Cookies = () => {
  const [cookiesVisible, setCookiesVisible] = useState(false);

  useEffect(() => {
    timedoutPromise(3000).then(() => setCookiesVisible(true));
  }, []);

  return (
    <CookiesContainer
      cookiesVisible={cookiesVisible}
      onClick={() => {
        setCookiesVisible(false);
      }}
    >
      <ContentContainer>This is some meaningless info about cookies that should never be here in a first place.</ContentContainer>
    </CookiesContainer>
  );
};

export default Cookies;
