import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import InputMask from "react-input-mask";
import axios from "axios";
import { motion } from "framer-motion";
import { Trans } from "gatsby-plugin-react-i18next";
import { NavLink } from "../styled-components/nav-link.style";

function ContactForm({ data }) {
  const { title, formFields, button } = data;
  const inputs = formFields.filter(
    (field) => field.type !== "textArea" && field.type !== "file"
  );
  const textArea = formFields.filter((field) => field.type === "textArea")[0];
  const fileUpload = formFields.filter((field) => field.type === "file")[0];

  const defaultFields = {
    firstName: "",
    lastName: "",
    email: "",
    linkedIn: "",
    resume: "",
    message: "",
  };
  const [fields, setFields] = useState(defaultFields);
  const [show, setShow] = useState(false);
  const resetFields = () => {
    setFields(defaultFields);
    setFileUploaded(false);
  };
  const [fileUploaded, setFileUploaded] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { firstName, lastName, email, linkedIn, resume, message } = fields;
    console.log(resume);
    try {
      await axios.post("/.netlify/functions/email", {
        firstName,
        lastName,
        email,
        linkedIn,
        resume,
        message,
      });
      resetFields();
      handleShow();
    } catch (error) {
      alert("Une erreur est survenue");
      console.log(error.response.data);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "resume") {
      setFileUploaded(true);
      console.log(value);
    }
    setFields({ ...fields, [name]: value });
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getFileName = () => {
    return fields["resume"]
      .split("\\")
      [fields["resume"].split("\\").length - 1].toUpperCase();
  };

  const resetResumeField = () => {
    setFields({ ...fields, resume: "" });
    setFileUploaded(false);
  };
  return (
    <>
      <section className="d-flex flex-column justify-content-center h-100">
        <div className="">
          <Form
            // onSubmit={handleSubmit}
            className="d-flex flex-column"
          >
            {inputs &&
              inputs.map((content, index) => (
                <InputGroup
                  key={content.id}
                  className="d-flex flex-align-start align-items-center"
                >
                  <div>0{index + 1}</div>
                  <Input
                    type={content.type}
                    placeholder={content.label}
                    mask={
                      content.fieldName === "phone" ? "(+1) 999 999-9999" : null
                    }
                    required={content.required}
                    onChange={handleChange}
                    name={content.fieldName}
                    value={fields[content.fieldName]}
                  />
                </InputGroup>
              ))}
            <InputGroup className="d-flex flex-align-start align-items-center">
              <Number>05</Number>
              {!fileUploaded && (
                <>
                  <FileInput
                    type={fileUpload.type}
                    placeholder={fileUpload.label}
                    required={fileUpload.required}
                    onChange={handleChange}
                    name={fileUpload.fieldName}
                    value={fields[fileUpload.fieldName]}
                  />
                  <Label htmlFor="file">{fileUpload.label}</Label>
                </>
              )}
              {fileUploaded && (
                <div className="d-flex justify-content-between w-100">
                  <Label>{getFileName()}</Label>

                  <Label onClick={resetResumeField} className="pointer">
                    &#x2715;
                  </Label>
                </div>
              )}
            </InputGroup>
            <div className="d-flex flex-align-start align-items-center">
              <div>06</div>
              <Label>{textArea.label}</Label>
            </div>
            <TextArea
              required={textArea.required}
              onChange={handleChange}
              name={textArea.fieldName}
              value={fields[textArea.fieldName]}
            />
            {button && (
              <FormButton onClick={handleSubmit} className="align-self-end">
                {button}
              </FormButton>
            )}
          </Form>
        </div>
      </section>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <h1 className="text-center">
            <Trans>title</Trans>
          </h1>
          <p className="px-3 text-center pt-2 mb-0">
            <Trans>message</Trans>
          </p>
          <NavLink to="/">
            <Trans>button</Trans>
          </NavLink>
          <ModalButton className="pe-3" onClick={handleClose}>
            <Trans>close</Trans>
          </ModalButton>
        </Modal.Body>
      </Modal>
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
  opacity: 0;
  position: absolute;
  z-index: 2;
  height: 50px;
  width: 210px;
  cursor: pointer;
`;

const Number = styled.div`
  font-family: "Neue-Italic";
  font-size: 14px;
`;

export default ContactForm;

const ModalButton = styled.p`
  cursor: pointer;
  text-align: right;
  font-weight: bold;
  color: black;
`;
