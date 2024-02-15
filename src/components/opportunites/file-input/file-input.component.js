import React, { useState } from "react";
import { FileUploader } from "./file-input.styles";
import UploadSrc from "../../../assets/img/upload.svg";
import { Icon } from "../job-modal-job-offer/job-modal-job-offer.styles";
const FileInput = ({ onFileSelect }) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      onFileSelect(file);
    }
  };

  return (
    <FileUploader className="form-field upload-container">
      <input
        type="file"
        id="customFileInput"
        onChange={handleFileChange}
        style={{ display: "none" }} // Hide the default input
        accept=".pdf,.doc,.docx, .html,.rft,.odt" // Specify accepted file types
        // You can add the max file size validation in the onFileSelect handler
      />
      <label htmlFor="customFileInput" className="upload-label">
        {!fileName && <Icon src={UploadSrc} alt="upload" />}
        <span className="upload-text">{fileName || "Attach Resume File"}</span>
      </label>
    </FileUploader>
  );
};

export default FileInput;
