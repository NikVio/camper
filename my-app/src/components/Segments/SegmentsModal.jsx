import sprite from "../../assets/sprite.svg";
import {
  AC,
  Adults,
  Automatic,
  Beds,
  BoxSegments,
  CD,
  Conditioner,
  Hob,
  Kitchen,
  Petrol,
  Radio,
} from "../CatalogCampers/Catalog.styled";

export const SegmentsModal = ({ item }) => {
  const {
    adults,
    details: { beds, hob, airConditioner },
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
      <li>
        <Conditioner>
          <svg
            style={{
              width: "20px",
              height: "20px",
            }}
          >
            <use href={`${sprite}#icon-air_conditioner`} />
          </svg>
          {airConditioner} air conditioner
        </Conditioner>
      </li>
      <li>
        <CD>
          <svg
            style={{
              width: "20px",
              height: "20px",
            }}
          >
            <use href={`${sprite}#icon-icon-park-outline_cd`} />
          </svg>
          CD
        </CD>
      </li>
      <li>
        <Radio>
          <svg
            style={{
              width: "20px",
              height: "20px",
            }}
          >
            <use href={`${sprite}#icon-Radio`} />
          </svg>
          Radio
        </Radio>
      </li>
      <li>
        <Hob>
          <svg
            style={{
              width: "20px",
              height: "20px",
            }}
          >
            <use href={`${sprite}#icon-Hob`} />
          </svg>
          {hob} hob
        </Hob>
      </li>
    </BoxSegments>
  );
};
