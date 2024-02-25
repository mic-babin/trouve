import { motion } from "framer-motion";
import styled from "styled-components";

export const Backdrop = styled(motion.div)`
  &.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: start;
    padding: 3rem 1rem;
  }

  .modal-content {
    background: white;
    /* Adjust width as needed */
    max-width: 500px;
  }

  .modal {
    font-family: Montserrat, Roboto, sans-serif;
    font-size: 13px;
    color: #46474a;
    display: block;
    width: 100%;
    background: #fff;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.35);
    overflow: hidden;
    position: relative;
    pointer-events: auto;
    max-width: 500px;
    height: auto;
  }

  header {
    background: #000;
    display: block;
    color: #fff;
    height: auto;
    position: relative;
    text-align: left;
    padding: 1em 3em 2em 2em;
    position: relative;
  }

  h2 {
    color: #fff;
    text-align: left;
    font-size: 1.8em;
    margin: 0.5em 0 0.2em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .category {
    -webkit-text-size-adjust: 100%;

    text-align: left;
    display: block;
    color: #ccc;
    font-size: 1.3em;
    font-weight: 700;
    margin-bottom: 1.2em;
  }

  .location,
  .separator,
  .type {
    font-size: 1.1em;
    font-weight: 500;
    color: #c9c9c9;
  }

  .close {
    position: absolute;
    top: 0.5em;
    right: 0.5em;
  }

  .main {
    overflow: auto;
    padding: 2em;
    height: auto;
  }
  .form-field {
    margin: 2em 0;
    margin-top: 0;
  }
  .required {
    color: #da4453;
    font-size: 1.2em;
  }
  input {
    margin: 0;
    line-height: normal;
    width: 100%;
    margin-top: 1em;
    -webkit-box-flex: 1;
    flex: 1;
    color: #797c7e;
    border: none;
    border-bottom: 1px solid #c9c9c9;
    transition: border-bottom 0.2s ease-in-out;
    padding: 0.5em;
  }

  .error {
    color: red;
    margin-left: 5px;
  }

  .field-label {
    font-size: 1.1em;
    color: #797c7e;
    box-sizing: inherit;
  }
  footer {
    display: flex;
    height: 50px;
  }
  button.cancel {
    text-transform: uppercase;
    height: 50px;
    font-size: 1.5em;
    border: none;
    color: #c9c9c9;
    background: 0 0;
    font-weight: 600;
    margin-top: 0;
  }

  button.send {
    margin-top: 0;
    outline: 0;
    text-transform: uppercase;
    height: 50px;
    font-size: 1.5em;
    border: none;
    color: #fff;
    background: #699;
    border-radius: 2px;
    width: 100%;
    font-weight: 700;
    background-color: #000000;
  }
`;
