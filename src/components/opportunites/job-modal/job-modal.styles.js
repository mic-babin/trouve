import styled from "styled-components";

export const Grid = styled.div`
  display: flex;
  padding: 0 1.5rem;
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
    height: 100%;
    min-height: calc(100vh - 90px);
    transition: all 0.15s ease-in;
    box-shadow: 8px 0 4px -2px rgba(0, 0, 0, 0.2);
  }
  .back:hover {
    background: #000;
  }
`;

export const JobWrapper = styled.div`
  width: calc(75vw - 76px);
`;

export const ApplyWrapper = styled.div`
  width: calc(25vw + 30px);
`;

export const Back = styled.img`
  height: 20px;
  width: 20px;
`;
