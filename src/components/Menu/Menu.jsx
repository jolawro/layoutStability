import React from "react";
import Icon from "../Icon/Icon";
import { ActiveMenuZone, MenuContainer, MenuBubble, MenuBubbleLink } from "./Menu.styles";
import { GooFilter } from "./GooFilter";
import Icons from "../Icon/Icons";

export const Menu = () => (
  <ActiveMenuZone>
    <Icons />
    <GooFilter />
    <MenuContainer>
      <MenuBubble index={3}>
        <MenuBubbleLink to="/">
          <Icon name="i-bug-03" />
        </MenuBubbleLink>
      </MenuBubble>
      <MenuBubble index={2}>
        <MenuBubbleLink to="/article">
          <Icon name="i-sheet-text" />
        </MenuBubbleLink>
      </MenuBubble>
      <MenuBubble index={1}>
        <MenuBubbleLink to="/">
          <Icon name="i-house" />
        </MenuBubbleLink>
      </MenuBubble>
      <MenuBubble index={0}>
        <MenuBubbleLink to="/">
          <Icon name="i-menu-02" />
        </MenuBubbleLink>
      </MenuBubble>
    </MenuContainer>
  </ActiveMenuZone>
);

export default Menu;
