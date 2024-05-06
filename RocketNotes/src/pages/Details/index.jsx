import { Container } from "./style";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

export function Details() {
  return (
    <Container>
      <Header />
      {/* <Button title="Login" loading /> loading é prop. boleana e ñ é necessario dizer true/false */}
      <Button title="Voltar" />
    </Container>
  );
}
