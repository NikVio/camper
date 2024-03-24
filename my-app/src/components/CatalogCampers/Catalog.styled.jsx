import styled from "styled-components";
import { theme } from "../../vars";

export const Wrapper = styled.div`
  display: flex;
  width: 888px;
  min-height: 358px;
  padding: 24px;
  border-radius: 20px;
  border: 1px solid rgb(16, 24, 40, 0.2);
  gap: 24px;
`;

export const BoxImg = styled.div`
  min-width: 290px;
  height: 310px;
`;

export const Img = styled.img`
  height: 310px;
  border-radius: 10px;
`;

export const BoxName = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const BoxPrice = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const BtnHeart = styled.button`
  width: 24px;
  height: 24px;
  fill: transparent;
  stroke: ${theme.color.black};
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  &:focus-within {
    stroke: none;
    fill: ${theme.hover.color.orange};
  }
`;

export const DescrText = styled.p`
  font-feature-settings: "clig" 0, "liga" 0;
  overflow: hidden;
  white-space: nowrap;
  width: 526px;
  font-size: 16px;
  text-overflow: ellipsis;
  margin: 24px 0 24px 0;
`;

export const BoxSegments = styled.ul`
  height: 96px;
  margin-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Adults = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 100px;
  background-color: ${theme.color.gray};
  padding: 12px 18px;
  width: 128px;
`;

export const Automatic = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 100px;
  background-color: ${theme.color.gray};
  padding: 12px 18px;
  width: 143px;
`;
export const Petrol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 100px;
  background-color: ${theme.color.gray};
  padding: 12px 18px;
  width: 109px;
`;
export const Kitchen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 100px;
  background-color: ${theme.color.gray};
  padding: 12px 18px;
  width: 123px;
`;
export const Beds = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 100px;
  background-color: ${theme.color.gray};
  padding: 12px 18px;
  width: 117px;
`;
export const AC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 100px;
  background-color: ${theme.color.gray};
  padding: 12px 18px;
  width: 87px;
`;

export const Conditioner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 100px;
  background-color: ${theme.color.gray};
  padding: 12px 18px;
  width: 187px;
`;

export const CD = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 100px;
  background-color: ${theme.color.gray};
  padding: 12px 18px;
  width: 88px;
`;

export const Radio = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 100px;
  background-color: ${theme.color.gray};
  padding: 12px 18px;
  width: 108px;
`;

export const Hob = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 100px;
  background-color: ${theme.color.gray};
  padding: 12px 18px;
  width: 108px;
`;

export const BtnMore = styled.button`
  min-width: 166px;
  padding: 16px 40px;
  border-radius: 200px;
  border: none;
  background-color: ${theme.color.orange};
  color: #fff;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
