import React from "react";
// import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
// import Modal from "react-bootstrap/Modal";
import { useState } from "react";
// import InputMask from "react-input-mask";
// import axios from "axios";
// import { motion } from "framer-motion";
import { useI18next } from "gatsby-plugin-react-i18next";

function ContactForm({ data }) {
  const { formFields, button } = data;
  const inputs = formFields.filter(
    (field) => field.type !== "textArea" && field.type !== "file"
  );
  const textArea = formFields.filter((field) => field.type === "textArea")[0];
  const fileUpload = formFields.filter((field) => field.type === "file")[0];

  const { i18n } = useI18next();
  const lang = i18n.language;

  const defaultFields = {
    firstName: "",
    lastName: "",
    email: "",
    linkedIn: "",
    resume: "",
    message: "",
  };
  const [fields, setFields] = useState(defaultFields);
  const [fileUploaded, setFileUploaded] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "resume") {
      setFileUploaded(true);
    }
    setFields({ ...fields, [name]: value });
  };

  const getFileName = () => {
    return fields["resume"]
      .split("\\")
      [fields["resume"].split("\\").length - 1].toUpperCase();
  };

  const resetResumeField = () => {
    setFields({ ...fields, ["resume"]: "" });
    setFileUploaded(false);
  };

  return (
    <>
      <section className="d-flex flex-column justify-content-center h-100">
        <div className="">
          <Form
            name="contact-form"
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            action="/success"
            enctype="multipart/form-data"
            className="d-flex flex-column"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact-form" />
            {inputs &&
              inputs.map((content, index) => (
                <InputGroup
                  key={content.id}
                  className="d-flex flex-align-start align-items-center"
                >
                  <Number>0{index + 1}</Number>
                  <Input
                    type={content.type}
                    placeholder={content.label}
                    required={content.required}
                    onChange={handleChange}
                    name={content.fieldName}
                    value={fields[content.fieldName]}
                  />
                </InputGroup>
              ))}
            <InputGroup className="d-flex flex-align-start align-items-center">
              <Number>05</Number>
              {!fileUploaded && lang === "fr" && (
                <FileInput
                  type="file"
                  placeholder={fileUpload.label}
                  required={fileUpload.required}
                  onChange={handleChange}
                  name={fileUpload.fieldName}
                  value={fields[fileUpload.fieldName]}
                />
              )}
              {!fileUploaded && lang === "en" && (
                <FileInputEn
                  type="file"
                  placeholder={fileUpload.label}
                  required={fileUpload.required}
                  onChange={handleChange}
                  name={fileUpload.fieldName}
                  value={fields[fileUpload.fieldName]}
                />
              )}
              {fileUploaded && <Label>{getFileName()}</Label>}
              {fileUploaded && (
                <Label onClick={resetResumeField} className="pointer">
                  &#x2715;
                </Label>
              )}
            </InputGroup>
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
              <FormButton type="submit" className="align-self-end mt-3">
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

  &:focus {
    outline: none !important;
  }
`;

const FileInput = styled(Input)`
  width: 195px;
  user-select: none;
  -webkit-user-select: none;

  /* TODO add variable */
  &::before {
    content: "JOINDRE VOTRE CV ICI";
    visibility: visible;
    color: black;
    display: inline-block;
    outline: none;
    white-space: nowrap;
    margin-right: 100px;
    cursor: pointer;
  }
`;

const FileInputEn = styled(FileInput)`
  &::before {
    content: "ATTACH CV HERE";
  }
`;
const Number = styled.div`
  font-family: "Neue-Italic";
`;

export default ContactForm;
