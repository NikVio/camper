import {
  BoxImg,
  BoxName,
  BoxPrice,
  BtnHeart,
  BtnMore,
  DescrText,
  Img,
  Wrapper,
} from "./Catalog.styled";
import sprite from "../../assets/sprite.svg";
import { SegmentsCatalog } from "../Segments/SegmentsCatalog";
import { useState } from "react";
import { BasicModalWindow } from "../BaseModal/BaseModal";
import CampersDetails from "../CampersDetails/CampersDetails";

export const CatalogCampers = ({ item }) => {
  const { photo, name, price, rating, location, description } = item;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <BoxImg>
        <Img src={photo} alt={name} />
      </BoxImg>
      <div>
        <BoxName>
          <h3
            style={{
              fontSize: "24px",
            }}
          >
            {name}
          </h3>
          <BoxPrice>
            <h3
              style={{
                fontSize: "24px",
              }}
            >
              €{price}.00
            </h3>
            <BtnHeart>
              <svg
                style={{
                  width: "24px",
                  height: "24px",
                }}
              >
                <use href={`${sprite}#icon-heart`} />
              </svg>
            </BtnHeart>
          </BoxPrice>
        </BoxName>

        <div
          style={{
            display: "flex",
            gap: "16px",
          }}
        >
          <p
            style={{
              textDecoration: "underline",
            }}
          >
            {rating}(2 Rewiews)
          </p>
          <p>{location}</p>
        </div>
        <DescrText>{description}</DescrText>
        <SegmentsCatalog item={item} />
        <BtnMore onClick={() => setIsOpen(true)}>Show more</BtnMore>
        {isOpen && (
          <BasicModalWindow isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <CampersDetails onClose={() => setIsOpen(false)} item={item} />
          </BasicModalWindow>
        )}
      </div>
    </Wrapper>
  );
};
