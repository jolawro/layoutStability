import React from "react";
import MoreArticles from "../MoreArticles/MoreArticles";
import { P } from "../Layout/Layout.styles";

import Gallery from "../Gallery/Gallery";

const ArticleContent = ({ article }) => (
  <>
    {renderArticle(article)}
    <MoreArticles />
  </>
);

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

export default ArticleContent;
