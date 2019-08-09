import styled from "styled-components";
import { GAPS } from "../../helpers/constants/gaps";
import { fromTheme } from "../../helpers/constants/colors";
import { Link } from "react-router-dom";

const MENU_DIAMETER = 60;
const BUBBLE_MARGIN = 20;

const INTERACTIVE_AREA_RADIUS = GAPS.l;

export const MenuContainer = styled.ul`
  filter: url(#goo);
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

export const MenuBubble = styled.li`
  right: 0;
  width: ${MENU_DIAMETER}px;
  height: ${MENU_DIAMETER}px;
  background-color: ${fromTheme.bg("secondary")};
  border-radius: 50%;

  margin-left: ${BUBBLE_MARGIN}px;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: transform 0.4s ease-in-out, opacity 0.2s linear;
  transform: ${({ index }) => `translateX(${index * (MENU_DIAMETER + BUBBLE_MARGIN)}px)`};
  cursor: pointer;

  svg {

    transition: transform 0.2s linear;
  }

  &:hover {
    // background-color: ${fromTheme.bg("primary")};
    // kolejność filtrów
    // filter: opacity(0.5);
    // opacity: 0.9;
    svg {
      transform: scale(1.1);
    }
  }
`;

export const MenuBubbleLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ActiveMenuZone = styled.div`
  position: fixed;
  z-index: 100;
  top: calc(-${INTERACTIVE_AREA_RADIUS} - 20px);
  right: 15px;
  height: ${MENU_DIAMETER}px;
  padding: ${INTERACTIVE_AREA_RADIUS};
  border-radius: ${INTERACTIVE_AREA_RADIUS};
  transform: translate(${INTERACTIVE_AREA_RADIUS}, -${INTERACTIVE_AREA_RADIUS});

  &:hover ${MenuBubble} {
    transform: none;
  }
`;
