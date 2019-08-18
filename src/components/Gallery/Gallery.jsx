import React from "react";
import { GalleryContainer, GalleryItem } from "./Gallery.styles";

const Gallery = ({ images }) => {
  return (
    <GalleryContainer>
      {images.map((image, i) => {
        return (
          <GalleryItem key={i}>
            <img intrinsicsize={`${image.width} x ${image.height}`} src={image.src} alt="alt" />
          </GalleryItem>
        );
      })}
    </GalleryContainer>
  );
};

export default Gallery;
