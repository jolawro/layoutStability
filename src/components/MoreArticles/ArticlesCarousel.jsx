import React from "react";
import { Carousel, CarouselItem, CarouselContent, Article, ArticleHeading } from "./MoreArticles.styles";
import { CircleIcon } from "../Icon/Icon";

const ArticlesCarousel = ({ articles, scrolledTo, setScrolledTo }) => {
  return (
    <>
      <CircleIcon name="i-arrow-left-07" onClick={() => setScrolledTo(Math.max(0, scrolledTo - 1))} />
      <CarouselContent>
        <Carousel nOfItems={articles.length} scrolledTo={scrolledTo}>
          {articles.map(({ image, title }, i) => {
            return (
              <CarouselItem key={i}>
                <img intrinsicsize={`${image.width}x${image.height}`} src={image.src} id={i} alt="article" />
                <Article>
                  <ArticleHeading>{title}</ArticleHeading>
                </Article>
              </CarouselItem>
            );
          })}
        </Carousel>
      </CarouselContent>
      <CircleIcon
        name="i-arrow-right-07"
        onClick={() => {
          setScrolledTo(Math.min(articles.length / 2 - 1, scrolledTo + 1));
        }}
      />
    </>
  );
};

export default ArticlesCarousel;
