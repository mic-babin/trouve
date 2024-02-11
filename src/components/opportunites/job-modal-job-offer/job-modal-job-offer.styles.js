import styled from "styled-components";

export const Card = styled.div`
  margin: 1rem;
  .card {
    font-family: Montserrat, Roboto, sans-serif;
    font-size: 13px;
    color: #46474a;
    background: #fff;
    padding: 1em;
    padding-left: 2em;
    padding-right: 2em;
    margin-right: 1.5em;
    -webkit-box-ordinal-group: 2;
    order: 1;
    -webkit-box-flex: 1;
    flex: 1;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  }
  .job-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .job-actions {
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-ordinal-group: 4;
    order: 3;

    button {
      cursor: pointer;
      border: none;
      background: 0 0;
      font-size: 1.1em;
      color: #6b6d71;
      white-space: nowrap;
      -webkit-box-ordinal-group: 3;
      order: 2;
      margin: 0 1em;
      display: inline-block;
      padding-left: 0;
    }
  }
  .share-outlets {
    visibility: visible;
    box-sizing: inherit;
    padding-right: 20px;
    white-space: nowrap;
    -webkit-box-ordinal-group: 2;
    order: 1;
    border-left: none;
    border-right: 1px solid transparent;
  }
  h2 {
    font-size: 1.6em;
    font-weight: 500;
    display: inline-block;
    -webkit-box-ordinal-group: 2;
    order: 1;
    color: #000;
  }

  .fill {
    -webkit-text-size-adjust: 100%;
    --rem: 16;
    -webkit-font-smoothing: antialiased;
    font-family: Montserrat, Roboto, sans-serif;
    font-size: 13px;
    color: #46474a;
    visibility: visible;
    box-sizing: inherit;
    -webkit-box-flex: 1;
    flex: 1;
    -webkit-box-ordinal-group: 3;
    order: 2;
    display: inline-block;
  }

  .job-details {
    word-wrap: break-word;
    line-height: 1.5em;
    margin-top: 1em;

    u {
      line-height: 1.5em;
      font-weight: 700;
      box-sizing: inherit;
    }

    br {
      font-size: 10px;
    }
  }
`;
