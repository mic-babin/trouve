import styled from "styled-components";

export const Card = styled.div`
  margin-top: 1rem;
  border-radius: 0;
  width: calc(25vw + 15px);

  &.card {
    font-size: 13px;
    color: #46474a;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
    padding: 1rem;
    margin-bottom: 1.5em;
    -webkit-box-ordinal-group: 3;
    order: 2;
    border-radius: 0;

    button {
      font: inherit;
      margin: 0;
      cursor: pointer;
      width: 100%;
      border: none;
      background: #000;
      color: #fff;
      padding: 0.5em;
      border-radius: 3px;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 1.3em;
      margin-top: 1em;
      transition: box-shadow 0.2s ease-in-out;
    }
    a {
      font-size: 14px;
      letter-spacing: 1px;
      background-color: transparent;
      color: #000;
      text-decoration: none;
      font-weight: 700;
      margin-bottom: 1em;
      display: block;
    }
  }

  .card-title {
    font-size: 1.7em;
    font-weight: 500;
    display: block;
    color: #000;
    transition: color 0.15s ease-in-out;
    text-decoration: none;
    margin-top: 0.7em;
    margin-bottom: 0;
  }
  .card-location {
    color: #939597;
    font-weight: 500;
    font-size: 1.1em;
  }
`;
