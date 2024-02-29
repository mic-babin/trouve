import styled from "styled-components";

export const Card = styled.div`
  .card-wrapper {
    color: #46474a;
    display: flex;
    flex-flow: row wrap;
    -webkit-box-pack: start;
    justify-content: flex-start;
    color: #46474a;
    padding: 1.5rem 0.75rem;
    width: 100%;
  }
  .card {
    font-size: 13px;
    font-family: "Montserrat", sans-serif;
    color: #000;
    text-decoration: none;
    opacity: 1;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
    background: #fff;
    padding: 1rem;

    cursor: pointer;
    display: block;
    height: 365px;
    text-align: center;
    border-radius: 0;
    max-width: 100%;
  }
  .card-content {
    height: 330px;
    overflow: hidden;
    position: relative;
  }
  .card-content:after {
    content: "";
    width: 100%;
    height: 130px;
    position: absolute;
    top: 200px;
    right: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1)
    );
  }
  .card-title-category {
    margin-bottom: 0.75em;
  }
  .card-title {
    font-size: 1.7em;
    font-weight: 500;
    display: block;
    color: #000;
    transition: color 0.15s ease-in-out;
    text-decoration: none;
    margin: 0.5em 0 0.25em;
  }
  .card-category {
    display: block;
    color: #333;
    font-weight: 600;
    font-size: 1.2em;
    margin: 0;
  }

  .card-location,
  .card-type {
    color: #939597;
    font-weight: 500;
    font-size: 1.1em;
  }
  .card-separator {
    color: #939597;
    font-weight: 500;
    font-size: 1.1em;
  }
  .card-description {
    margin-top: 1em;
    margin-bottom: 0.5em;
    color: #606264;
    line-height: 1.5em;
    font-weight: 400;
    font-size: 1.1em;
    display: block;
    white-space: normal;
    text-overflow: ellipsis;
    height: 16em;
    overflow: hidden;
    position: relative;
    text-align: left;
  }
`;
