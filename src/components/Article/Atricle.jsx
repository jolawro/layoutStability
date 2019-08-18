import React, { useEffect, useState } from "react";
import Page from "../Page/Page";
import { P } from "../Layout/Layout.styles";
import Hero from "../Hero/Hero";
import Gallery from "../Gallery/Gallery";
import MoreArticles from "../MoreArticles/MoreArticles";
import { HeadingContainer, ContentContainer, MainHeading } from "../Page/Page.styles";

const Article = () => {
  const [article, setArticle] = useState(null);
  
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
    renderPromo
  };

  return (
    <>
      <Page {...props}>
        <ContentContainer>
          {renderArticle(article)}
          <MoreArticles />
        </ContentContainer>
      </Page>
    </>
  );
};

function renderArticle(article) {
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

export default Article;
