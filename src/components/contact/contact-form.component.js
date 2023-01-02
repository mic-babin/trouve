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

  document.forms.fileForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const result = document.querySelector(".result");
    fetch("/", {
      body: new FormData(event.target),
      method: "POST",
    })
      .then(() => {
        result.innerText = "Success";
      })
      .catch((error) => {
        result.innerText = `Failed: ${error}`;
      });
  });

  return (
    <>
      <section className="d-flex flex-column justify-content-center h-100">
        <div className="">
          <form
            name="fileForm"
            enctype="multipart/form-data"
            data-netlify="true"
          >
            <p>
              <label>
                <span>Name:</span>
                <input name="name" type="text" />
              </label>
            </p>
            <p>
              <label>
                <span>Add file:</span>
                <input name="file" type="file" />
              </label>
            </p>
            <button>Submit</button>
            <p className="result"></p>
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
