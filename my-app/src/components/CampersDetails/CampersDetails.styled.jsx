import styled from "styled-components";
import { theme } from "../../vars";

export const ModalCloseBtn = styled.button`
  position: absolute;
  stroke: ${theme.color.black};
  fill: transparent;
  &:hover {
    stroke: ${theme.hover.color.orange};
  }

  width: 32px;
  height: 32px;
  top: 40px;
  right: 40px;

  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

export const ModalSvg = styled.svg`
  width: 32px;
  height: 32px;
`;

export const Wrapper = styled.div`
  padding: 40px;
  max-width: 982px;
  height: 90vh;
  background-color: ${theme.color.white};
  border-radius: 20px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 15px;
  }
`;

export const BoxImg = styled.ul`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const Img = styled.img`
  height: 310px;
  border-radius: 10px;
  object-fit: none;
`;

export const BoxName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Price = styled.h3`
  font-size: 24px;
  margin-top: 16px;
  margin-bottom: 24px;
`;

export const DescrText = styled.p`
  font-size: 16px;
  margin: 24px 0 44px 0;
`;

export const WrapperList = styled.div`
  display: flex;
  width: 902px;
  justify-content: space-between;
`;

export const BoxInfo = styled.div`
  width: 430px;
`;

export const BoxForm = styled.div`
  width: 448px;
  padding: 24px;
  border: 1px solid rgb(16, 24, 40, 0.2);
  border-radius: 10px;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 40px;
  margin-bottom: 44px;
  border-bottom: 1px solid rgb(16, 24, 40, 0.2);
  padding-bottom: 24px;
`;

export const Link = styled.a`
  position: relative;
  cursor: pointer;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  &:active::after,
  &:focus::after,
  &:hover::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: ${theme.color.orange};

    bottom: -24px;
    left: 0;
  }
`;
