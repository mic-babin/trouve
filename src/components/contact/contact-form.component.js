import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { navigate } from "gatsby-link";

function encode(data) {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

function ContactForm({ data }) {
  // const { formFields, button } = data;
  // const inputs = formFields.filter(
  //   (field) => field.type !== "textArea" && field.type !== "file"
  // );
  // const textArea = formFields.filter((field) => field.type === "textArea")[0];
  // const fileUpload = formFields.filter((field) => field.type === "file")[0];
  const [state, setState] = useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleAttachment = (e) => {
    setState({ ...state, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  function encode(data) {
    const formData = new FormData();

    for (const key of Object.keys(data)) {
      formData.append(key, data[key]);
    }

    return formData;
  }

  return (
    <>
      <section className="d-flex flex-column justify-content-center h-100">
        <div className="">
          <form
            name="file-upload"
            method="post"
            action="/success/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="file-upload" />
            <p hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={handleChange} />
              </label>
            </p>
            <p>
              <label>
                Your name:
                <br />
                <input type="text" name="name" onChange={handleChange} />
              </label>
            </p>
            <p>
              <label>
                File:
                <br />
                <input
                  type="file"
                  name="attachment"
                  onChange={handleAttachment}
                />
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
            <p>
              Note: multiple file uploads are not supported by Netlify at this
              time.
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
