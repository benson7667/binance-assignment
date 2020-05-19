import styled from "styled-components";

export const StyledCryptoTrade = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 4px;

  & .box1,
  .box2 {
    color: ${(props) => props.theme.accentColor};
    background-color: ${(props) => props.theme.primaryColor};
  }
`;
