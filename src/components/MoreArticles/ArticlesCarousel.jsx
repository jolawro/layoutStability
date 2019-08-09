import React, { useRef, useEffect, createRef, useCallback } from "react";
import { CarouselContainer, Carousel, CarouselItem, CarouselContent, Article, ArticleHeading } from "./MoreArticles.styles";
import { spawnTeaserImages } from "../../helpers/spawnImages";
import { GalleryImage } from "../Gallery/Gallery.styles";
import { CircleIcon } from "../Icon/Icon";

const NUM_OF_IMAGES = 20;

const ArticlesCarousel = ({ scrolledTo, setScrolledTo, visibleItems, setVisibleItems }) => {
  const carouselRef = useRef(null);
  let imagesRefs = useRef([...Array(NUM_OF_IMAGES)].map(createRef));

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
            if (entries.length < 20 && !isVisible(id)) {
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
  }, [isVisible, setVisibleItems, visibleItems]);

  function getImageSrc(id, imageSrc) {
    if (isVisible(id) || !window.IntersectionObserver) {
      console.log(visibleItems, "found", +id);
      return imageSrc;
    }
    return "";
  }

  return (
    <CarouselContainer>
      <CircleIcon name="i-arrow-left-07" onClick={() => setScrolledTo(Math.max(0, scrolledTo - 1))} />
      <CarouselContent ref={carouselRef}>
        <Carousel nOfItems={NUM_OF_IMAGES} scrolledTo={scrolledTo}>
          {spawnTeaserImages(NUM_OF_IMAGES).map((imageSrc, i) => {
            return (
              <CarouselItem key={i}>
                <GalleryImage src={getImageSrc(i, imageSrc)} id={i} alt="article" ref={imagesRefs.current[i]} />
                <Article>
                  <ArticleHeading>Lorem ipsum dolor</ArticleHeading>
                </Article>
              </CarouselItem>
            );
          })}
        </Carousel>
      </CarouselContent>
      <CircleIcon
        name="i-arrow-right-07"
        onClick={() => {
          setScrolledTo(Math.min(NUM_OF_IMAGES / 2 - 1, scrolledTo + 1));
        }}
      />
    </CarouselContainer>
  );
};

export default ArticlesCarousel;
