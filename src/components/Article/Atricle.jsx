import React, { useEffect, useState } from "react";
import { timedoutPromise } from "../../helpers/timedoutPromise";
import Page from "../Page/Page";
import { P } from "../Layout/Layout.styles";
import Hero from "../Hero/Hero";
import Gallery from "../Gallery/Gallery";
import MoreArticles from "../MoreArticles/MoreArticles";
import { HeadingContainer, ContentContainer, MainHeading } from "../Page/Page.styles";

const Article = () => {
  const [cookiesVisible, setCookiesVisible] = useState(false);
  const [article, setArticle] = useState(null);

  useEffect(() => {
    timedoutPromise(3000).then(() => setCookiesVisible(true));
  }, []);

  useEffect(() => {
    const fetchArticle = async () => {
      const res = await fetch("http://localhost:8039/get-article?gallerySize=10");

      if (res && res.ok) {
        const article = await res.json();
        setArticle(article);
      }
    };

    fetchArticle();
  }, []);

  function renderArticle() {
    return (
      article &&
      article.map((section, i) => {
        switch (section.type) {
          case "text":
            return <P key={i}>{section.data}</P>;
          case "gallery":
            return <Gallery key={i} images={section.data} />;
          default:
            return "Unknown type";
        }
      })
    );
  }

  function renderPromo() {
    return (
      <>
        <HeadingContainer>
          <ContentContainer>
            <MainHeading>Lorem ipsum</MainHeading>
          </ContentContainer>
        </HeadingContainer>
        <ContentContainer>
          <Hero />
        </ContentContainer>
      </>
    );
  }

  const props = {
    contentLoaded: !!article,
    cookiesVisible,
    setCookiesVisible,
    renderPromo
  };

  return (
    <>
      <Page {...props}>
        <ContentContainer>
          {renderArticle()}
          <MoreArticles />
        </ContentContainer>
      </Page>
    </>
  );
};

export default Article;
