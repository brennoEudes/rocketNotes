import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { FiPlus, FiSearch } from "react-icons/fi"; // importando ícone
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";

import { api } from "../../services/api";

export function Home() {
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  function handleTagSelected(tagName) {
    // desmarca todas as seleções de uma única vez:
    if (tagName === "all") {
      return setSelectedTags([]);
    }

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

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    // É possível criar uma fcn dentro do useEffect q será usada somente nele:
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data); // armazena os dados da RES
    }

    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(
        `/notes?title=${search}&tags=${selectedTags}`
      ); // enviando title e tags através de queries!
      setNotes(response.data);
    }

    fetchNotes();
  }, [selectedTags, search]); // Em [], informamos os estados dependentes, ou seja, quando os conteúdos do vetor mudarem, o useEffect será executado novamente.

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
        <Input
          placeholder="Pesquisar pelo título"
          icon={FiSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* inserindo a lupa */}
      </Search>

      <Content>
        <Section title="Minhas Notas">
          {notes.map((note) => (
            <Note
              key={String(note.id)}
              data={note}
              onClick={() => handleDetails(note.id)}
            />
          ))}
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
