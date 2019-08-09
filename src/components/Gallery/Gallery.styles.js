import styled from "styled-components";
import { GAPS } from "../../helpers/constants/gaps";
import { fromTheme } from "../../helpers/constants/colors";

export const GalleryContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: ${GAPS.m};
`;

export const GalleryItem = styled.li`
  width: 33.33%;
  overflow: hidden;
  position: relative;
  background-color: ${fromTheme.base("subtle")};

  &:nth-child(odd) {
    background-color: ${fromTheme.base("subtle")}cc;
  }

  &::after {
    content: "";
    display: block;
    padding-top: 100%;
  }
`;

export const GalleryImage = styled.img`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
