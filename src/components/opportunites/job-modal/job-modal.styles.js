import styled from "styled-components";

export const Grid = styled.div`
  display: flex;
  padding: 1.5em;
  background-color: #efefef;

  .back {
    margin: 0;
    overflow: visible;
    -webkit-appearance: button;
    cursor: pointer;
    outline: 0;
    width: 46px;
    background: 0 0;
    border: none;
    color: #000;
    display: block;
    height: 100vh;
    transition: all 0.15s ease-in;
    box-shadow: 8px 0 4px -4px rgba(0, 0, 0, 0.2);
  }
  .back:hover {
    color: #fff;
    background: #000;
  }
`;

export const JobWrapper = styled.div`
  width: calc(75vw - 46px);
`;

export const ApplyWrapper = styled.div`
  width: calc(25vw);
`;
