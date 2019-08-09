import React, { useEffect, useState } from "react";
import { timedoutPromise } from "../../helpers/timedoutPromise";
import { LOREM_IPSUM } from "../../helpers/lorem";
import Page from "../Page/Page";
import { P } from "../Layout/Layout.styles";
import Hero from "../Hero/Hero";
import Gallery from "../Gallery/Gallery";
import MoreArticles from "../MoreArticles/MoreArticles";

const Home = () => {
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(function() {
    timedoutPromise(2500).then(() => setContentVisible(true));
  });

  return (
    <Page title="Lorem Impsum" contentLoaded={contentVisible}>
      <Hero imageSrc="https://picsum.photos/1400/600" />
      <P>{LOREM_IPSUM}</P>
      <P>{LOREM_IPSUM}</P>
      <Gallery numOfImages={16} />
      <P>{LOREM_IPSUM}</P>
      <MoreArticles />
    </Page>
  );
};

export default Home;
