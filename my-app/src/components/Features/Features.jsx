import { SegmentsModal } from "../Segments/SegmentsModal";
import {
  BoxListDetails,
  BoxSegment,
  DetailsItem,
  TitleDetails,
} from "./Features.styled";

export default function Features({ item }) {
  const { form, length, width, height, tank, consumption } = item;
  return (
    <div>
      <BoxSegment>
        <SegmentsModal item={item} />
      </BoxSegment>
      <div>
        <TitleDetails>Vehicle details</TitleDetails>
        <BoxListDetails>
          <DetailsItem>
            <p>Form</p>
            <p>{form}</p>
          </DetailsItem>
          <DetailsItem>
            <p>Length</p>
            <p>{length}</p>
          </DetailsItem>
          <DetailsItem>
            <p>Width</p>
            <p>{width}</p>
          </DetailsItem>
          <DetailsItem>
            <p>Height</p>
            <p>{height}</p>
          </DetailsItem>
          <DetailsItem>
            <p>Tank</p>
            <p>{tank}</p>
          </DetailsItem>
          <DetailsItem>
            <p>Consumption</p>
            <p>{consumption}</p>
          </DetailsItem>
        </BoxListDetails>
      </div>
    </div>
  );
}
