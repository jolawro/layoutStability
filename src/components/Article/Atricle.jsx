import React, { useEffect, useState } from "react";
import Page from "../Page/Page";
import Hero from "../Hero/Hero";
import { HeadingContainer, ContentContainer, MainHeading } from "../Page/Page.styles";
import Spinner from "../Spinner/Spinner";
import ArticleContent from "./ArticleContent";

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

  return (
    <>
      <Page showFooter={!!article}>
        {renderPromo()}
        <ContentContainer>
          {article ? (
            <ArticleContent article={article} />
          ) : (
            <Spinner />
          )}
        </ContentContainer>
      </Page>
    </>
  );
};


export default Article;
