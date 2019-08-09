import React from "react";
import { HomeContainer, HomeTitle, HomeSubtitle, HomeLink } from "./Home.styles";
import Menu from "../Menu/Menu";
import { Header, Layout, Content, Footer } from "../Page/Page.styles";
import { Logo } from "../Logo/Logo";

const Home = () => (
  <>
    <Layout>
      <Menu />
      <Header>
        <Logo />
      </Header>
      <Content>
        <HomeContainer>
          <HomeTitle>Hi, I'm Ksymena</HomeTitle>
          <HomeSubtitle>Frontend Developer from Miquido</HomeSubtitle>
          <HomeLink to="/article">Go to article</HomeLink>
        </HomeContainer>
      </Content>
      <Footer />
    </Layout>
  </>
);

export default Home;
