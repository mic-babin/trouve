import styled from "styled-components";

export const GridWrapper = styled.div`
  padding-top: 105px;
  padding-left: 15px;
  padding-right: 15px;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns of equal width */
  grid-gap: 1rem;
  background-color: #efefef;
`;
