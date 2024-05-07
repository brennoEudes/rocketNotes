import styled from "styled-components";

export const Container = styled.button`
  background: none;
  color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100}; // passando a prop. isActive e usando condicional.

  border: none;
  font-size: 16px;
`;
