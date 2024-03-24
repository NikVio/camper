import {
  BoxForm,
  BoxImg,
  BoxInfo,
  BoxName,
  DescrText,
  Img,
  Link,
  ModalCloseBtn,
  ModalSvg,
  NavList,
  Price,
  Wrapper,
  WrapperList,
} from "./CampersDetails.styled";
import sprite from "../../assets/sprite.svg";
import { useState } from "react";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";
import { FormModal } from "../FormModal/FormModal";

export default function CampersDetails({ onClose, item }) {
  const [openFeatures, setOpenFeatures] = useState(false);
  const [openReviews, setOpenReviews] = useState(false);
  const [form, setForm] = useState(false);
  const { gallery, name, price, rating, location, description } = item;

  const handleFeatures = () => {
    setOpenFeatures(true);
    setOpenReviews(false);
    setForm(true);
  };

  const handleReviews = () => {
    setOpenReviews(true);
    setOpenFeatures(false);
    setForm(true);
  };
  return (
    <>
      <ModalCloseBtn onClick={onClose}>
        <ModalSvg>
          <use href={`${sprite}#icon-close-x`} />
        </ModalSvg>
      </ModalCloseBtn>
      <Wrapper>
        <BoxName>
          <h3
            style={{
              fontSize: "24px",
            }}
          >
            {name}
          </h3>
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
        </BoxName>
        <Price>€{price}.00</Price>

        <BoxImg>
          {gallery.map((img, index) => (
            <li key={index}>
              <Img src={img} alt={name} />
            </li>
          ))}
        </BoxImg>

        <DescrText>{description}</DescrText>

        <NavList>
          <li>
            <Link onClick={handleFeatures}>Features</Link>
          </li>
          <li>
            <Link onClick={handleReviews}>Reviews</Link>
          </li>
        </NavList>
        <WrapperList>
          <BoxInfo>
            {openFeatures && <Features item={item} />}
            {openReviews && <Reviews item={item} />}
          </BoxInfo>
          {form && (
            <BoxForm>
              <h4
                style={{
                  marginBottom: "8px",
                }}
              >
                Book your campervan now
              </h4>
              <p>Stay connected! We are always ready to help you.</p>
              <FormModal />
            </BoxForm>
          )}
        </WrapperList>
      </Wrapper>
    </>
  );
}
