import styled from "styled-components";

// signinBg é variável que criamos p/ armazenar a imagem e vamos chamá-la no componente!
import signinBg from "../../assets/bg-signin.png";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  a {
    margin-top: 124px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;

// exportamos como div pois queremos usar a img como bg da div lateral da tela:
export const Background = styled.div`
  flex: 1; // ocupa todo o espaço disponível
  background: url(${signinBg}) no-repeat center center; // chamamos a var criada aqui!
  background-size: cover;
`;
