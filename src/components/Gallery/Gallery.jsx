import React from "react";
import { GalleryContainer, GalleryItem, GalleryImage } from "./Gallery.styles";

const Gallery = ({ images }) => {
  return (
    <GalleryContainer>
      {images.map((image, i) => {
        return (
          <GalleryItem key={i}>
            <GalleryImage {...image} alt="alt" />
          </GalleryItem>
        );
      })}
    </GalleryContainer>
  );
};

export default Gallery;
