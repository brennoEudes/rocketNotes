import styled from "styled-components";
import { Link } from "react-router-dom"; // p/ navegação

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 105px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  padding: 0 80px;
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  gap: 14px;

  > img {
    width: 56px;
    height: 56px;

    border-radius: 50%; /* Macete p/ criar círculo */
    object-fit: cover; /* Garante que a imagem preencha o contêiner proporcionalmente */
    object-position: center; /* Centraliza a imagem dentro do contêiner */
  }

  > div {
    display: flex;
    flex-direction: column;
    line-height: 24px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    font-size: 36px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;
