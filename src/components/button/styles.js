import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border: none;
  border-radius: 20px;
  background-color: ${(props) => props.theme.accentColor};
  font-size: 14px;
  font-weight: bold;
  transition: filter 0.4s ease-in-out;

  &:hover {
    filter: brightness(1.1);
  }
`;
