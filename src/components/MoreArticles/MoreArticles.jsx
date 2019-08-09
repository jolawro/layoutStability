import React, { useState } from "react";
import { Articles } from "./MoreArticles.styles";
import { SectionHeading } from "../Layout/Layout.styles";
import ArticlesCarousel from "./ArticlesCarousel";

const MoreArticles = () => {
  const [scrolledTo, setScrolledTo] = useState(0);
  const [visibleItems, setVisibleItems] = useState([0, 1]);

  const props = {
    scrolledTo,
    setScrolledTo,
    visibleItems,
    setVisibleItems
  };
  return (
    <Articles>
      <SectionHeading>More articles {visibleItems.join(", ")}</SectionHeading>
      <ArticlesCarousel {...props} />
    </Articles>
  );
};

export default MoreArticles;
