import React, { useState, useEffect } from "react";
import { ContentContainer, Header, Layout, Content, Footer, FooterCopyright } from "./Page.styles";
import { Menu } from "../Menu/Menu";
import { Logo } from "../Logo/Logo";
import Cookies from "../Cookies/Cookies";
import { timedoutPromise } from "../../helpers/timedoutPromise";
import Spinner from "../Spinner/Spinner";

const Page = ({ contentLoaded, children }) => {
  const [cookiesVisible, setCookiesVisible] = useState(false);

  useEffect(() => {
    timedoutPromise(3000).then(() => setCookiesVisible(true));
  }, []);

  return (
    <>
      <Menu />
      <Cookies
        onClick={() => {
          setCookiesVisible(false);
        }}
      />
      <Layout cookiesVisible={cookiesVisible}>
        <Header>
          <Logo />
        </Header>

        <Content>{contentLoaded ? children : <Spinner />}</Content>

        {contentLoaded && (
          <Footer>
            <ContentContainer>
              <FooterCopyright>
                Copyright &copy; 2019 <strong>Ksymena Basińska</strong>. All rights reserved.
              </FooterCopyright>
            </ContentContainer>
          </Footer>
        )}
      </Layout>
    </>
  );
};

export default Page;
