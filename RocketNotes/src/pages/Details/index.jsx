import { Container, Links, Content } from "./style";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir nota" />
          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis
            neque, efficitur non odio sed, congue blandit odio. Sed finibus
            risus id massa faucibus pharetra. Cras hendrerit tristique est ac
            aliquam. Maecenas imperdiet enim neque, a tempor elit consequat sit
            amet. Morbi in aliquam ipsum, ac feugiat enim. Praesent sit amet ex
            eget sapien pretium semper ac vitae mi. Nam tortor orci, commodo eu
            semper eu, ultricies eu sapien. Duis ultricies a ligula at feugiat.
            In est orci, luctus vitae semper quis, congue eget ex.
          </p>
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
          <Section title="Marcadores">
            <Tag title="Express" />
            <Tag title="NodeJS" />
          </Section>
          {/* <Button title="Login" loading /> loading é prop. boleana e ñ é necessario dizer true/false */}
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
