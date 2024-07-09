import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  // barra de rolagem somente no conteúdo da main (header fixo):
  main {
    grid-area: content;
    /* overflow-y: scroll; */
    overflow-y: auto; // só ativa a barra quando o conteúdo ñ caber na tela
  }

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap; // quando não tiver mais espaço, joga o item para a linha de baixo.
  }
`;

export const Form = styled.form`
  max-width: 550px;
  margin: 38px auto;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 36px;

    button {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;
