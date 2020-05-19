import styled from "styled-components";

export const StyledDashboard = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr 300px;
  grid-template-rows: 55px 1fr 300px;
  gap: 4px;
  height: 100vh;

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

  @media screen and (max-width: 960px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 55px 600px 300px 600px 400px;
    gap: 4px;
    height: 100vh;

    & .top {
      grid-row: 1/2;
      grid-column: 1/4;
    }

    & .left {
      grid-row: 3/4;
      grid-column: 1/4;
    }

    & .center {
      grid-row: 2/3;
      grid-column: 1/4;
    }

    & .right {
      grid-column: 1/4;
      grid-row: 4/5;
    }

    & .bottom {
      grid-column: 1/4;
    }
  }
`;
