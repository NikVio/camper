import styled from "styled-components";
import { theme } from "../../vars";

export const Circle = styled.p`
  background: ${theme.color.gray};
  color: ${theme.color.orange};
  border-radius: 60px;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 500;
`;

export const BoxReviews = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const TextReviews = styled.p`
  margin: 16px 0 24px 0;
`;
