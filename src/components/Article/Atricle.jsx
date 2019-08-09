import React, { useEffect, useState } from "react";
import { timedoutPromise } from "../../helpers/timedoutPromise";
import { LOREM_IPSUM } from "../../helpers/lorem";
import Page from "../Page/Page";
import { P } from "../Layout/Layout.styles";
import Hero from "../Hero/Hero";
import Gallery from "../Gallery/Gallery";
import MoreArticles from "../MoreArticles/MoreArticles";
import { HeadingContainer, ContentContainer, MainHeading } from "../Page/Page.styles";

const Article = () => {
  const [contentVisible, setContentVisible] = useState(false);
  const [cookiesVisible, setCookiesVisible] = useState(false);

  useEffect(function() {
    timedoutPromise(2500).then(() => setContentVisible(true));
  });
  useEffect(() => {
    timedoutPromise(3000).then(() => setCookiesVisible(true));
  }, []);

  console.log("render");
  return (
    <>
      <Page contentLoaded={contentVisible} cookiesVisible={cookiesVisible} setCookiesVisible={setCookiesVisible}>
        <HeadingContainer>
          <ContentContainer>
            <MainHeading>Lorem ipsum</MainHeading>
          </ContentContainer>
        </HeadingContainer>
        <ContentContainer>
          <Hero />
          <P>{LOREM_IPSUM}</P>
          <P>{LOREM_IPSUM}</P>
          <Gallery numOfImages={16} />
          <P>{LOREM_IPSUM}</P>
          <MoreArticles />
        </ContentContainer>
      </Page>
    </>
  );
};

export default Article;
