import React, { useState, useEffect } from "react";
import { FileUploader } from "./file-input.styles";
import UploadSrc from "../../../assets/img/upload.svg";
import { Icon } from "../job-modal-job-offer/job-modal-job-offer.styles";
import { Trans } from "react-i18next";

const FileInput = ({ fields, setFields, fileUploaded, setFileUploaded }) => {
  const [imageUpload, setImageUpload] = useState(null);
  const [base64, setBase64] = useState(null);
  const [name, setName] = useState("");

  const uploadFile = (img) => {
    if (img) {
      setImageUpload(img);
      setName(img.name);
      setFileUploaded(true);
    }
  };

  const resetResumeField = () => {
    setFields({ ...fields, resume: "" });
    setFileUploaded(false);
  };

  const base64Enconding = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // The result includes the content type (data:;base64,)
        // You may want to split the result if you need just the Base64 encoded string
        const base64Content = reader.result;
        setBase64(base64Content);
      };
      reader.onerror = (error) => {
        console.error("Error reading file:", error);
      };
    }
  };

  useEffect(() => {
    if (imageUpload && !base64) {
      base64Enconding(imageUpload);
    }
    if (base64) {
      setFields({ ...fields, resume: base64 });
    }
  }, [imageUpload, base64]);

  return (
    <FileUploader className="form-field upload-container">
      <input
        type="file"
        className="w-100"
        id="customFileInput"
        onChange={(event) => {
          event.preventDefault();
          uploadFile(event.target.files[0]);
        }}
        name="resume"
        style={{ display: "none" }} // Hide the default input
        accept=".pdf,.doc,.docx, .html,.rft,.odt"
        value={fields["resume"].value} // Specify accepted file types
        // You can add the max file size validation in the onFileSelect handler
      />
      <label
        htmlFor="customFileInput"
        className="upload-label pointer w-100 d-flex justify-content-center"
      >
        {name === "" && <Icon src={UploadSrc} alt="upload" />}
        <span className="upload-text">
          {name || <Trans>attachResume</Trans>}
        </span>
      </label>
    </FileUploader>
  );
};

export default FileInput;
