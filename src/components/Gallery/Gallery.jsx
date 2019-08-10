import React from "react";
import { GalleryContainer, GalleryItem, GalleryImage } from "./Gallery.styles";
import { spawnRandomImages } from "../../helpers/spawnImages";

const Gallery = ({ images, numOfImages = 10 }) => {
  return (
    <GalleryContainer>
      {spawnRandomImages(numOfImages).map((src, i) => {
        return (
          <GalleryItem key={i}>
            <GalleryImage src={src} alt="alt" width="100%" />
          </GalleryItem>
        );
      })}
    </GalleryContainer>
  );
};

export default Gallery;
