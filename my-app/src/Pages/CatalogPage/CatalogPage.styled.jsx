import styled from "styled-components";
import { theme } from "../../vars";

export const CatalogList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const BtnLoadMore = styled.button`
  padding: 16px 32px;
  border-radius: 200px;
  background-color: transparent;
  text-align: center;
  color: ${theme.color.black};
  text-decoration: none;
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  display: inline-block;
  max-width: 145px;
  border: 1px solid rgb(16, 24, 40, 0.2);
  margin-top: 50px;
  margin-bottom: 100px;
  &:hover {
    border-color: ${theme.hover.color.secondOrange};
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
