import React from "react";
import { HomeContainer, HomeTitle, HomeSubtitle, HomeLink } from "./Home.styles";
import Page from "../Page/Page";

const Home = () => (
  <>
    <Page contentLoaded>
      <HomeContainer>
        <HomeTitle>Hi, I'm Ksymena</HomeTitle>
        <HomeSubtitle>Frontend Developer from Miquido</HomeSubtitle>
        <HomeLink to="/article">Go to article</HomeLink>
      </HomeContainer>
    </Page>
  </>
);

export default Home;
