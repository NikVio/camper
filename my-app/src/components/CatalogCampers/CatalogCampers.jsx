import {
  AC,
  Adults,
  Automatic,
  Beds,
  BoxImg,
  BoxName,
  BoxPrice,
  BoxSegments,
  BtnHeart,
  BtnMore,
  DescrText,
  Img,
  Kitchen,
  Petrol,
  Wrapper,
} from "./Catalog.styled";
import sprite from "../../assets/sprite.svg";

export const CatalogCampers = ({
  item: {
    photo,
    name,
    price,
    rating,
    location,
    description,
    adults,
    details: { beds },
  },
}) => {
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
        <BoxSegments>
          <li>
            <Adults>
              <svg
                style={{
                  width: "20px",
                  height: "20px",
                }}
              >
                <use href={`${sprite}#icon-adults`} />
              </svg>
              {adults} adults
            </Adults>
          </li>
          <li>
            <Automatic>
              <svg
                style={{
                  width: "20px",
                  height: "20px",
                }}
              >
                <use href={`${sprite}#icon-Automatic`} />
              </svg>
              Automatic
            </Automatic>
          </li>
          <li>
            <Petrol>
              <svg
                style={{
                  width: "20px",
                  height: "20px",
                }}
              >
                <use href={`${sprite}#icon-Petrol`} />
              </svg>
              Petrol
            </Petrol>
          </li>
          <li>
            <Kitchen>
              <svg
                style={{
                  width: "20px",
                  height: "20px",
                }}
              >
                <use href={`${sprite}#icon-Kitchen`} />
              </svg>
              Kitchen
            </Kitchen>
          </li>
          <li>
            <Beds>
              <svg
                style={{
                  width: "20px",
                  height: "20px",
                }}
              >
                <use href={`${sprite}#icon-beds`} />
              </svg>
              {beds} beds
            </Beds>
          </li>
          <li>
            <AC>
              <svg
                style={{
                  width: "20px",
                  height: "20px",
                }}
              >
                <use href={`${sprite}#icon-adults`} />
              </svg>
              AC
            </AC>
          </li>
        </BoxSegments>
        <BtnMore>Show more</BtnMore>
      </div>
    </Wrapper>
  );
};
