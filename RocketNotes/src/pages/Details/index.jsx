import { Container } from "./style";

import { Button } from "../../components/Button";

export function Details() {
  return (
    <Container>
      <h1>Hello World!</h1>
      <span>Brenno Eudes</span>

      <Button title="Login" loading /> {/* loading é prop. boleana e ñ é necessario dizer true/false*/}
      <Button title="Cadastrar" />
      <Button title="Voltar" />
    </Container>
  );
}
