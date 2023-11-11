import React from "react";
import styled from "styled-components";
import { useState } from "react";
import FileUploader from "./upload-file.component";

import { useForm } from "../../utils/form.hook";
import { validate } from "../../utils/form.validators";

function ContactForm({ data }) {
  const [show, setShow] = useState(false);
  const { handleChange, fields, handleSubmit, errors } = useForm(
    validate,
    setShow
  );

  const { formFields, button } = data;
  const inputs = formFields.filter(
    (field) => field.type !== "textArea" && field.type !== "file"
  );
  const textArea = formFields.filter((field) => field.type === "textArea")[0];
  const fileUpload = formFields.filter((field) => field.type === "file")[0];

  const [fileUploaded, setFileUploaded] = useState(false);

  return (
    <>
      <section className="d-flex flex-column justify-content-center h-100">
        <div className="">
          <Form className="d-flex flex-column">
            {inputs &&
              inputs.map((content, index) => (
                <>
                  <InputGroup
                    key={content.id}
                    className="d-flex flex-align-start align-items-center"
                  >
                    <Number>0{index + 1}</Number>
                    <Input
                      type={content.type}
                      placeholder={content.label}
                      mask={
                        content.fieldName === "phone"
                          ? "(+1) 999 999-9999"
                          : null
                      }
                      required={content.required}
                      onChange={handleChange}
                      name={content.fieldName}
                      value={fields[content.fieldName]}
                      style={{ paddingLeft: index === 0 && "28px" }}
                    />
                  </InputGroup>
                  {errors[content.fieldName] && (
                    <Error>** {errors[content.fieldName]}</Error>
                  )}
                </>
              ))}
            <FileUploader
              fileUpload={fileUpload}
              fileUploaded={fileUploaded}
              setFileUploaded={setFileUploaded}
              fields={fields}
              setFields={handleChange}
            />

            <div className="d-flex flex-align-start align-items-center">
              <Number>06</Number>
              <Label>{textArea.label}</Label>
            </div>
            <TextArea
              required={textArea.required}
              onChange={handleChange}
              name={textArea.fieldName}
              value={fields[textArea.fieldName]}
            />
            {button && (
              <FormButton
                onClick={(e) => handleSubmit(e)}
                className="align-self-end"
              >
                {button}
              </FormButton>
            )}
          </Form>
        </div>
      </section>
    </>
  );
}

const Form = styled.form`
  display: block;
`;

const FormButton = styled.button`
  font-size: 18px;
  font-weight: 500;
  color: black;
  padding: 5px 0;
  text-decoration: none;
  background-color: transparent;
  border: none;
  transition: all 0.2s ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;

const Label = styled.div`
  padding: 1rem 1.5rem;
`;

const InputGroup = styled.div`
  border-bottom: 1.5px solid black;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  padding: 1rem 1.5rem;
  background-color: #e7e5e0;

  &:focus {
    border: none;
    outline: none !important;
  }

  ::placeholder {
    color: black;
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: black;
  }

  ::-ms-input-placeholder {
    color: black;
  }
`;

const TextArea = styled.textarea`
  border: 1.5px solid black;
  height: 135px;
  resize: none;
  background-color: #e7e5e0;

  &:focus {
    outline: none !important;
  }
`;

const Number = styled.div`
  font-family: "Neue-Italic";
  font-size: 14px;
`;

const Error = styled.div`
  color: red;
`;

export default ContactForm;
