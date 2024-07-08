import { useState, useEffect } from "react";
import { Container, Links, Content } from "./style";
import { useParams, useNavigate } from "react-router-dom"; // params permite a busca dos parâmetros passados na rota

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";
import { api } from "../../services/api";

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1); // Evita a adição de uma nova rota p/ pág anterior no histórico de navegação, melhorando a performance da app! (obs: não vai p/ próx camada do bolo!)
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente excluir a nota?"); // confirm é mét JS q guarda booleano. É uma boa prática perguntar antes da remoção para evitar erros do usuário

    // se clicar no confirmar:
    if (confirm) {
      await api.delete(`/notes/${params.id}`); // acessamos através de params pois temos o id da nota na rota
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, []);

  return (
    <Container>
      <Header />
      {data && ( // main só será mostrado se houver conteúdo!
        <main>
          <Content>
            <ButtonText title="Excluir nota" onClick={handleRemove} />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            {data.links && ( // a sessão só será renderizada se houver links!
              <Section title="Links Úteis">
                {/* O children não é passado como prop. comum, mas captura tudo q está dentro (abaixo): */}
                <Links>
                  {data.links.map((link) => (
                    <li key={String(link.id)}>
                      <a href="link.url" target="_blank">
                        {link.url}
                      </a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}

            {data.tags && (
              <Section title="Marcadores">
                {data.tags.map((tag) => (
                  <Tag key={String(tag.id)} title={tag.title} />
                ))}
              </Section>
            )}

            {/* <Button title="Login" loading /> loading é prop. boleana e ñ é necessario dizer true/false */}
            <Button title="Voltar" onClick={handleBack} />
          </Content>
        </main>
      )}
    </Container>
  );
}
