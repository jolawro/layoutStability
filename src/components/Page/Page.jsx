import React from "react";
import { HeadingContainer, MainHeading, ContentContainer, Header, Layout, Content, Footer } from "./Page.styles";
import { Menu } from "../Menu/Menu";
import Icons from "../Icon/Icons";
import { Logo } from "../Logo/Logo";

const Page = ({ title, children }) => {
  return (
    <>
      <Layout>
        <Icons />
        <Header>
          <Logo />
        </Header>
        <Menu />
        <Content>
          <HeadingContainer>
            <ContentContainer>
              <MainHeading>{title}</MainHeading>
            </ContentContainer>
          </HeadingContainer>
          <ContentContainer>{children}</ContentContainer>
        </Content>
        <Footer />
      </Layout>
    </>
  );
};

export default Page;
