import React, { useState, useEffect } from "react";
import { HeadingContainer, MainHeading, ContentContainer, Header, Layout, Content, Footer, FooterCopyright } from "./Page.styles";
import { Menu } from "../Menu/Menu";
import Icons from "../Icon/Icons";
import { Logo } from "../Logo/Logo";
import Cookies from "../Cookies/Cookies";
import { timedoutPromise } from "../../helpers/timedoutPromise";
import Spinner from "../Spinner/Spinner";

const Page = ({ title, contentLoaded, children }) => {
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
        <Icons />
        <Header>
          <Logo />
        </Header>
        <Content>
          <HeadingContainer>
            <ContentContainer>
              <MainHeading>{title}</MainHeading>
            </ContentContainer>
          </HeadingContainer>
          {contentLoaded ? <ContentContainer>{children}</ContentContainer> : <Spinner />}
        </Content>
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
