import React from "react";
import { storage } from "../../utils/firebase";
import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import styled from "styled-components";
const FileUploader = ({
  fileUpload,
  fields,
  setFields,
  fileUploaded,
  setFileUploaded,
}) => {
  const [imageUpload, setImageUpload] = useState(null);

  const [name, setName] = useState();

  const uploadFile = (img) => {
    setImageUpload(img);
    setName(img.name);
    setFileUploaded(true);
  };

  const resetResumeField = () => {
    setFields({ ...fields, resume: "" });
    setFileUploaded(false);
  };

  useEffect(() => {
    if (imageUpload) {
      const imageRef = ref(storage, `resumes/${imageUpload.name + v4()}`);
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setFields({ ...fields, resume: url });
        });
      });
    }
  }, [imageUpload]);

  return (
    <InputGroup className="d-flex flex-align-start align-items-center">
      <Number>05</Number>
      {!fileUploaded && (
        <>
          {fileUpload && (
            <>
              <FileInput
                type={fileUpload.type}
                placeholder={fileUpload.label}
                required={fileUpload.required}
                onChange={(event) => {
                  uploadFile(event.target.files[0]);
                }}
                name={fileUpload.fieldName}
                value={fields[fileUpload.fieldName]}
              />
              <Label htmlFor="file">{fileUpload.label}</Label>
            </>
          )}
        </>
      )}
      {fileUploaded && (
        <div className="d-flex justify-content-between w-100">
          <Label>{name}</Label>

          <Label onClick={resetResumeField} className="pointer">
            &#x2715;
          </Label>
        </div>
      )}
    </InputGroup>
  );
};
const Label = styled.div`
  padding: 1rem 1.5rem;
`;

const InputGroup = styled.div`
  border-bottom: 1.5px solid black;
`;

const Number = styled.div`
  font-family: "Neue-Italic";
  font-size: 14px;
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

const FileInput = styled(Input)`
  opacity: 0;
  position: absolute;
  z-index: 2;
  height: 50px;
  width: 210px;
  cursor: pointer;
`;

export default FileUploader;
