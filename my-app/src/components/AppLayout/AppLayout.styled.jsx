import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../vars";

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 120px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #4c5a61;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const HeaderList = styled.ul`
  display: flex;
  gap: 150px;
  font-size: 25px;
  font-weight: bold;
`;

export const StyledLink = styled(NavLink)`
  color: #fff;

  &.active {
    color: ${theme.color.orange};
  }
`;
