import styled from "styled-components";

export const Aside = styled.aside`
  background-color: #efefef;
  color: #000;
  transition: all 0.2s ease-in-out;
  width: 320px;
  min-width: 320px;
  height: 100%;

  @media screen and (max-width: 767px) {
    width: 100vw;
  }
`;

export const Section = styled.section`
  font-family: Montserrat, Roboto, sans-serif;

  font-size: 13px;
  color: #000;
  box-sizing: inherit;
  display: block;
  -webkit-box-flex: 1;
  flex: 1;
  min-height: 100%;
  height: 100%;
  overflow: auto;
  padding: 1rem;
  max-width: 300px;
  box-shadow: 8px 0 4px -4px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 767px) {
    max-width: 100vw;
    width: 100vw;
    min-height: 100%;
    height: calc(100%);
    box-shadow: none;
  }

  .keyword-search {
    position: relative;
    margin: 1em 0 2em;
    @media screen and (max-width: 767px) {
      margin: 1.5em 0 1em;
    }
    label {
      position: absolute;
      top: -1px;
      left: -8px;
      font-size: 1.5em;
      color: #000;

      svg {
        margin-top: 9px;
        height: 24px;
        width: 24px;
      }
    }
  }

  .search {
    margin: 0;
    line-height: normal;
    background-color: #fff;
    border-radius: 50px;
    border-color: rgba(100, 100, 100, 0.25);
    padding: 0.5em 2.5em;
    width: 100%;
    font-size: 1rem;
    color: rgba(100, 100, 100, 0.75);
    box-sizing: border-box;
  }

  .filter-section {
    margin-bottom: 2em;
    display: flex;
    flex-flow: row wrap;
    max-height: 370px;
    overflow: hidden;
    @media screen and (max-width: 767px) {
      margin-bottom: 1em;
    }
  }

  .filter-section-header {
    width: 100%;
    margin-bottom: 1em;
    display: flex;
    align-items: start;
    justify-content: space-between;
    h4 {
      font-size: 1.1em;
    }
    @media screen and (max-width: 767px) {
      padding-top: 0.5rem;
      margin-bottom: 0.5em;
    }
  }

  .clear-filter {
    overflow: visible;
    text-transform: none;
    -webkit-appearance: button;
    cursor: pointer;
    padding-top: 0.5em;
    padding-right: 0;
    margin: 0;
    border: none;
    background: 0 0;
    float: right;
    color: red;
  }

  .filter-item {
    width: 100%;
    padding-bottom: 2px;
    padding-top: 5px;
    border-bottom: 1px solid #e2e2e2;
    color: #707070;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    @media screen and (max-width: 767px) {
      padding-bottom: 2.5px;
      padding-top: 4px;
    }
  }

  input[type="checkbox"] {
    cursor: pointer;
    background: #d4d4d4;
    border: none;
    height: 15px;
    width: 15px;
    border-radius: 3px;
    -webkit-appearance: initial;
    display: inline-block;
    -webkit-transition: all 130ms ease-in-out;
    transition: all 130ms ease-in-out;
  }

  input[type="checkbox"]:checked {
    background: #000;
  }
  label {
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-size: 1.1em;
    cursor: pointer;
    padding-left: 1em;
    padding-right: 1em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  span {
    font-weight: 400;
    line-height: 1.5;
    text-align: var(--bs-body-text-align);
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    font-size: 1.1em;
  }

  .show-more {
    display: block;
    width: 100%;
    text-align: center;
    margin-top: 1em;
    cursor: pointer;
    color: #000;
  }
`;
