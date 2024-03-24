import { BoxReviews, Circle, TextReviews } from "./Reviews.styled";

export default function Reviews({ item }) {
  const { reviews } = item;
  return (
    <>
      <BoxReviews>
        <Circle>A</Circle>
        <h3>{reviews[0].reviewer_name}</h3>
      </BoxReviews>
      <TextReviews>{reviews[0].comment}</TextReviews>
      <BoxReviews>
        <Circle>B</Circle>
        <h3>{reviews[1].reviewer_name}</h3>
      </BoxReviews>
      <TextReviews>{reviews[1].comment}</TextReviews>
    </>
  );
}
