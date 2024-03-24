import { Formik } from "formik";

import * as Yup from "yup";
import {
  Comment,
  ErrorMessage,
  Field,
  Form,
  FormBtn,
} from "./FormModal.styled";

const PhoneBookSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").required("Required"),
  email: Yup.string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      "Invalid email address"
    )
    .required("Required"),
});

export const FormModal = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        date: "",
        comment: "",
      }}
      validationSchema={PhoneBookSchema}
      onSubmit={(values, actions) => {
        actions.resetForm();
      }}
    >
      <Form>
        <Field name="name" type="name" variant="outline" placeholder="Name" />
        <ErrorMessage name="name" component="span" />

        <Field
          name="email"
          type="email"
          variant="outline"
          placeholder="Email"
        />
        <ErrorMessage name="email" component="span" />
        <div>
          <Field
            name="date"
            type="name"
            variant="outline"
            placeholder="Booking date"
          />
          {/* <svg>
            <use href={`${sprite}#icon-close-x`} />
          </svg> */}
        </div>
        <ErrorMessage name="date" component="span" />
        <Comment
          name="comment"
          type="comment"
          variant="outline"
          placeholder="Comment"
        />

        <FormBtn type="submit">Send</FormBtn>
      </Form>
    </Formik>
  );
};
