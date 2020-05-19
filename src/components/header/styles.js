import styled from "styled-components";

export const StyledHeader = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.accentColor};
`;
