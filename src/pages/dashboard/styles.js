import styled from "styled-components";

export const StyledDashboard = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr 300px;
  grid-template-rows: 55px 1fr 300px;
  gap: 4px;
  height: 100vh;

  & .grid-item {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-family: sans-serif;
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.accentColor};
  }

  & .top {
    grid-row: 1/2;
    grid-column: 1/4;
  }

  & .center {
    grid-row: 2/3;
    grid-column: 2/3;
  }

  & .bottom {
    grid-column: 1/4;
  }

  /* & .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  } */
`;
