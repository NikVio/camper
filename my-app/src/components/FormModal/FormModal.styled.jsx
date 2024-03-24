import styled from "styled-components";
import {
  Field as FormikField,
  Form as FormikForm,
  ErrorMessage as FormikError,
} from "formik";
import { theme } from "../../vars";

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 400px;
  margin-top: 24px;
`;

export const Field = styled(FormikField)`
  padding: 18px;
  line-height: 20px;
  font-size: 14px;
  color: rgb(40, 50, 80);
  border-radius: 10px;
  background: ${theme.color.gray};
  border: 1px solid rgb(230, 240, 250);
  box-shadow: 0 5px 4px rgba(110, 120, 130, 0.2);
`;

export const ErrorMessage = styled(FormikError)`
  color: red;
  font-size: 14px;
`;

export const FormBtn = styled.button`
  margin-top: 24px;
  padding: 16px 60px;
  text-decoration: none;
  border-radius: 200px;
  border: none;
  background-color: ${theme.color.orange};
  color: #fff;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
`;

export const Comment = styled.textarea`
  padding: 18px;
  line-height: 20px;
  height: 114px;
  font-size: 14px;
  color: rgb(40, 50, 80);
  border-radius: 10px;
  background: ${theme.color.gray};
  border: 1px solid rgb(230, 240, 250);
  box-shadow: 0 5px 4px rgba(110, 120, 130, 0.2);
  resize: none;
`;
