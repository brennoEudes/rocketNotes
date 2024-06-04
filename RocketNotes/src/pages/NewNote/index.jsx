import { useState } from "react";
import { Link } from "react-router-dom"; // p/ navegação

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

import { Container, Form } from "./styles";

export function NewNote() {
  const [links, setLinks] = useState([]); // setLinks guarda todos os links
  const [newLink, setNewLink] = useState(""); // setNewLink armazena o link add no momento

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink]); // mantém o q tinha antes + o novo link
    setNewLink(""); // reset estado
  }

  function handleRemoveLink(deleted) {
    setLinks((prevState) => prevState.filter((link) => link !== deleted)); // retorna lista nova c/ links diferentes do link deletado
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>

          <Input placeholder="Título" />

          <TextArea placeholder="Observações" />
          <Section title="Links Úteis">
            {links.map((link, index) => (
              <NoteItem
                key={String(index)} // sempre q temos componentes gerados a partir de listas, colocamos uma chave
                value={link}
                onClick={() => {
                  handleRemoveLink(link);
                }}
              />
            ))}
            <NoteItem
              isNew
              placeholder="Novo link"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>
          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem key={String(index)} value={tag} onClick={() => {}} />
              ))}

              <NoteItem
                isNew
                placeholder="Nova tag"
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
}
