import React from "react";
import { ContentContainer, Header, Layout, Content, Footer, FooterCopyright } from "./Page.styles";
import { Menu } from "../Menu/Menu";
import { Logo } from "../Logo/Logo";
import { Link } from "react-router-dom";

const Page = ({ showFooter, children }) => {
  return (
    <>
      <Menu />
      {/* <Cookies /> */}
    <Layout>
        <Header>
          <Link to="/">
            <Logo />
          </Link>
        </Header>
        <Content>{children}</Content>

        {showFooter && (
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
