import styled from "styled-components";
import { GAPS } from "../../helpers/constants/gaps";
import { GalleryItem } from "../Gallery/Gallery.styles";
import { fromTheme } from "../../helpers/constants/colors";

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  height: 210px;
`;

export const CarouselContent = styled.div`
  position: relative;
  flex-grow: 1;
  height: 100%;
  max-width: 600px;
  overflow-x: hidden;
  margin: 0 ${GAPS.s};
`;

export const CarouselItem = styled(GalleryItem)`
  display: block;
  float: left;
  box-sizing: border-box;
  &::after {
    padding-top: 70%;
  }
`;

export const Carousel = styled.ul`
  display: block;
  position: absolute;
  top: 0;
  height: 100%;
  width: ${({ nOfItems }) => nOfItems * 300}px;
  transform: translateX(${({ scrolledTo }) => -scrolledTo * 600}px);
  transition: transform 0.5s;

  ${CarouselItem} {
    width: calc(100% / ${({ nOfItems }) => nOfItems});
  }
`;

export const Articles = styled.div`
  margin: ${GAPS.m} 0;
`;

export const Article = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  background-color: ${fromTheme.base("primary")}66;
`;

export const ArticleHeading = styled.h4`
  margin: 20px;
  font-weight: bold;
  font-size: 18px;
  color: ${fromTheme.bg("tertiary")};
`;
