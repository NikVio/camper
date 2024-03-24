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
        <Field name="name" type="name" placeholder="Name" />
        <ErrorMessage name="name" component="span" />

        <Field name="email" type="email" placeholder="Email" />
        <ErrorMessage name="email" component="span" />

        <Field name="date" type="date" placeholder="Booking date" />

        <ErrorMessage name="date" component="span" />
        <Comment name="comment" type="comment" placeholder="Comment" />

        <FormBtn type="submit">Send</FormBtn>
      </Form>
    </Formik>
  );
};
