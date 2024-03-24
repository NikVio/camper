import {
  AC,
  Adults,
  Automatic,
  Beds,
  BoxSegments,
  Kitchen,
  Petrol,
} from "../CatalogCampers/Catalog.styled";
import sprite from "../../assets/sprite.svg";

export const SegmentsCatalog = ({ item }) => {
  const {
    adults,
    details: { beds },
  } = item;
  return (
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
  );
};
