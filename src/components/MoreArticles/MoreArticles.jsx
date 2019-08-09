import React, { useState } from "react";
import { CarouselContainer, Carousel, CarouselItem, CarouselContent, Articles } from "./MoreArticles.styles";
import { spawnTeaserImages } from "../../helpers/spawnImages";
import { GalleryImage } from "../Gallery/Gallery.styles";
import { CircleIcon } from "../Icon/Icon";
import { SectionHeading } from "../Layout/Layout.styles";

const MoreArticles = () => {
  const [scrolledTo, setScrolledTo] = useState(0);
  return (
    <Articles>
      <SectionHeading>More articles</SectionHeading>
      <CarouselContainer>
        <CircleIcon name="i-arrow-right-07" click={() => setScrolledTo(scrolledTo + 1)} />
        <CarouselContent>
          <Carousel nOfItems={10} scrolledTo={scrolledTo}>
            {spawnTeaserImages(10).map((imageSrc, i) => {
              return (
                <CarouselItem key={i}>
                  <GalleryImage src={imageSrc} alt="article" />
                </CarouselItem>
              );
            })}
          </Carousel>
        </CarouselContent>
        <CircleIcon
          name="i-arrow-right-07"
          click={() => {
            console.log("scrolledTo");
            setScrolledTo(scrolledTo + 1);
          }}
        />
      </CarouselContainer>
    </Articles>
  );
};

export default MoreArticles;
