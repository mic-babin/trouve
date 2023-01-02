import React from "react";
import styled from "styled-components";
import { useState } from "react";

function ContactForm({ data }) {
  // const { formFields, button } = data;
  // const inputs = formFields.filter(
  //   (field) => field.type !== "textArea" && field.type !== "file"
  // );
  // const textArea = formFields.filter((field) => field.type === "textArea")[0];
  // const fileUpload = formFields.filter((field) => field.type === "file")[0];

  return (
    <>
      <section className="d-flex flex-column justify-content-center h-100">
        <div className="">
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/success/"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label>
                Your Name: <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Your Email: <input type="email" name="email" />
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message"></textarea>
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

const Form = styled.form`
  display: block;
`;

export default ContactForm;
