import styled from "styled-components";

export const FileUploader = styled.div`
  &.form-field.upload-container {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 10px;
    margin: 2em 0;
    border: 1px solid #000;
    color: #000;
    border-radius: 3px;
    position: relative;
    cursor: pointer;
    font-size: 1.2em;
    margin-top: 1em;
    margin-bottom: 1.6em;
    height: 50px;
  }

  .upload-label {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .bhi-publish {
    /* Add styles for your icon here */
  }

  .upload-text {
    /* Text styling */
  }
`;
