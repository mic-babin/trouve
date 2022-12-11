import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import InputMask from "react-input-mask";
import axios from "axios";
import { motion } from "framer-motion";
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
  };
  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     const { firstName, lastName, email, linkedIn, resume, message } = fields;
  //     try {
  //       await axios.post("/.netlify/functions/email", {
  //         firstName,
  //         lastName,
  //         email,
  //         linkedIn,
  //         resume,
  //         message,
  //       });
  //       //   resetFields();
  //       console.log(fields);
  //       handleShow();
  //     } catch (error) {
  //       alert("Une erreur est survenue");
  //       console.log(error.response.data);
  //     }
  //   };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <section className="d-flex flex-column justify-content-center h-100">
        <div className="">
          {title && <H2 className="text-center">{title}</H2>}
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
                  <div>0{index + 1}</div>
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
              <div>05</div>
              <FileInput
                type={fileUpload.type}
                placeholder={fileUpload.label}
                required={fileUpload.required}
                onChange={handleChange}
                name={fileUpload.fieldName}
                value={fields[fileUpload.fieldName]}
              />
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
              <FormButton type="submit" className="align-self-end">
                {button}
              </FormButton>
            )}
          </Form>
        </div>
      </section>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <h3 className="p-3">Merci de communiquer avec moi</h3>
          <p className="px-3">
            Votre message a bien été envoyé et sera traité dans les plus bref
            délais. Merci!
          </p>
          <ModalButton className="pe-3" onClick={handleClose}>
            Fermer
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
  font-weight: 600;
  color: black;
  padding: 0.75rem 0;
  text-decoration: none;
  &:hover {
    color: red;
  }
`;
const Label = styled.div`
  padding: 1rem 1.5rem;
`;
const InputGroup = styled.div`
  border-bottom: 1px solid black;
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
  border: 1px solid black;
  height: 85px;
  resize: none;
  &:focus {
    outline: none !important;
  }
`;
const H2 = styled.h2`
  @media only screen and (max-width: 576px) {
    font-size: 30px !important;
  }
`;
const ModalButton = styled.p`
  cursor: pointer;
  text-align: right;
  font-weight: bold;
  color: #395266;
`;
const FileInput = styled(Input)`
  visibility: hidden;
  /* TODO add variable */
  &::before {
    content: "SELECT SOME FILES";
    visibility: visible;
    color: transparent;
    display: inline-block;
    outline: none;
    white-space: nowrap;
    cursor: pointer;
  }
`;
export default ContactForm;