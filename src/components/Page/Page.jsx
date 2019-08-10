import React from "react";
import { ContentContainer, Header, Layout, Content, Footer, FooterCopyright } from "./Page.styles";
import { Menu } from "../Menu/Menu";
import { Logo } from "../Logo/Logo";
import Cookies from "../Cookies/Cookies";
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";

const Page = ({ contentLoaded, cookiesVisible, setCookiesVisible, renderPromo, children }) => {
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
          <Link to="/">
            <Logo />
          </Link>
        </Header>
        <Content>
          {renderPromo && renderPromo()}
          {contentLoaded ? children : <Spinner />}
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
