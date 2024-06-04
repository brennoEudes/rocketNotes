import { useState } from "react";
import { Link } from "react-router-dom"; // p/ navegação

import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

import { api } from "../../services/api";

import { Container, Form } from "./styles";

export function NewNote() {
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]); // setLinks guarda todos os links
  const [newLink, setNewLink] = useState(""); // setNewLink armazena o link add no momento

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

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

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewNote() {

    if (!title) {
      return alert("Preencha o título corretamente!");
    }

    if (newLink) {
      return alert("Adicione o link corretamente!");
    }

    if (newTag) {
      return alert("Adicione a tag corretamente!");
    }

    await api.post("/notes", {
      title,
      description,
      tags,
      links,
    });

    alert("Nota criada com sucesso!");
    navigate("/");
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

          <Input
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
          />

          <TextArea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />
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
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => {
                    handleRemoveTag(tag);
                  }}
                />
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
          <Button title="Salvar" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  );
}
