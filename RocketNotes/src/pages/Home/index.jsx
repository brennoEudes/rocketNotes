import { FiPlus, FiSearch } from "react-icons/fi"; // importando ícone
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="Todos" />
        </li>
        <li>
          <ButtonText title="Frontend" />
        </li>
        <li>
          <ButtonText title="NodeJS" />
        </li>
        <li>
          <ButtonText title="ReactJS" />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />{" "}
        {/* inserindo a lupa */}
      </Search>

      <Content>
        <Section title="Minhas Notas">
          <Note
            data={{
              title: "ReactJS",
              tags: [
                { id: "1", name: "react" },
                { id: "2", name: "rocketseat" },
              ],
            }}
          />
        </Section>
      </Content>

      <NewNote to="/new-note"> {/* como alterar o styled.button p/ styled.(Link) precisamos inserir o "to" */}
        <FiPlus />
        Criar Nota
      </NewNote>
    </Container>
  );
}
