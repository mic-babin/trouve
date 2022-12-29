import styled from "styled-components";

export const MenuButton = styled.div`
  font-size: 30px;
  font-weight: 500;
  margin-right: 20px;
  letter-spacing: 2px;
  margin-top: 10px;
  cursor: pointer;

  @media (max-width: 991px) {
    margin-right: 8px;
  }
  @media (max-width: 575px) {
    margin-top: 4px;
  }
`;
