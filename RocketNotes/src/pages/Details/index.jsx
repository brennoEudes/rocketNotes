import { Container, Links } from "./style";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";

export function Details() {
  return (
    <Container>
      <Header />
      <Section title="Links Úteis">
        {/* O children não é passado como prop. comum, mas captura tudo q está dentro (abaixo): */}
        <Links>
          <li>
            <a href="#">https://www.rockeseat.com.br/</a>
          </li>
          <li>
            <a href="#">https://www.rockeseat.com.br/</a>
          </li>
        </Links>
      </Section>
      {/* <Button title="Login" loading /> loading é prop. boleana e ñ é necessario dizer true/false */}
      <Button title="Voltar" />
    </Container>
  );
}
