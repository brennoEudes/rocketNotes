import styled from "styled-components";

// armazena um elemento html (div)
export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
  "header"
  "content";
`;

export const Links = styled.ul`
list-style: none;

> li {
  margin-top: 12px;

  a {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
}
`;