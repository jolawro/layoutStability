import React, { useRef, useEffect, createRef, useCallback } from "react";
import { CarouselContainer, Carousel, CarouselItem, CarouselContent, Article, ArticleHeading } from "./MoreArticles.styles";
import { CircleIcon } from "../Icon/Icon";

const ArticlesCarousel = ({ articles, scrolledTo, setScrolledTo, visibleItems, setVisibleItems }) => {
  const carouselRef = useRef(null);
  let imagesRefs = useRef([...Array(articles.length)].map(createRef));

  const isVisible = useCallback(
    function(id) {
      return visibleItems.find(v => v === id) !== undefined;
    },
    [visibleItems]
  );

  useEffect(() => {
    let observer;
    if (window.IntersectionObserver) {
      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            const id = +entry.target.id;
            //   console.log(id, visibleItems.find(v => v === id));
            if (entries.length < articles.length && !isVisible(id)) {
              setVisibleItems([...visibleItems, id]);
            }
          });
        },
        {
          root: carouselRef.current.current,
          threshold: 0.5
        }
      );

      imagesRefs.current.forEach(value => {
        observer.observe(value.current);
      });
    }
    return () => observer && observer.disconnect();
  }, [articles.length, isVisible, setVisibleItems, visibleItems]);

  function getImageSrc(id, imageSrc) {
    if (isVisible(id) || !window.IntersectionObserver) {
      return imageSrc;
    }
    return "";
  }

  return (
    <CarouselContainer>
      <CircleIcon name="i-arrow-left-07" onClick={() => setScrolledTo(Math.max(0, scrolledTo - 1))} />
      <CarouselContent ref={carouselRef}>
        <Carousel nOfItems={articles.length} scrolledTo={scrolledTo}>
          {articles.map(({ image, title }, i) => {
            return (
              <CarouselItem key={i}>
                <img intrinsicsize={`${image.width}x${image.height}`} src={getImageSrc(i, image.src)} id={i} alt="article" ref={imagesRefs.current[i]} />
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
    </CarouselContainer>
  );
};

export default ArticlesCarousel;
