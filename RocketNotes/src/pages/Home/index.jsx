import { useState, useEffect } from "react";

import { FiPlus, FiSearch } from "react-icons/fi"; // importando ícone
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";

import { api } from "../../services/api";

export function Home() {
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  function handleTagSelected(tagName) {
    const alreadySelected = selectedTags.includes(tagName); // verifica se a tag está selecionada
    //console.log(alreadySelected); // booleano true ou false

    if (alreadySelected) {
      // se tag já selecionada:
      const filteredTags = selectedTags.filter((tag) => tag !== tagName);
      setSelectedTags(filteredTags);

    } else {
      // se tag não selecionada:
      setSelectedTags((prevState) => [...prevState, tagName]); // prevState permite a multipla seleção das tags
    }
  }

  useEffect(() => {
    // É possível criar uma fcn dentro do useEffect q será usada somente nele:
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data); // armazena os dados da RES
    }

    fetchTags();
  }, []);

  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title="Todos"
            onClick={() => handleTagSelected("all")}
            isActive={selectedTags.length === 0}
          />
        </li>
        {tags &&
          tags.map((tag) => (
            <li key={String(tag.id)}>
              <ButtonText
                title={tag.name}
                onClick={() => handleTagSelected(tag.name)}
                isActive={selectedTags.includes(tag.name)} // verifica se a tag está na lista, ou seja, selecionada
              />
            </li>
          ))}
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

      <NewNote to="/new-note">
        {" "}
        {/* como alterar o styled.button p/ styled.(Link) precisamos inserir o "to" */}
        <FiPlus />
        Criar Nota
      </NewNote>
    </Container>
  );
}
