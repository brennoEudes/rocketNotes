import { useState } from "react"; // hook p/ criação de ESTADOS p/ armazenar dinamicamente em memória, o(s) conteúdo(s) do(s) input(s).
import { Container, Form, Background } from "./styles";
import { Link, useNavigate } from "react-router-dom"; // p/ navegação

import { api } from "../../services/api";

import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    //console.log(name, email, password); OBS: Boa estratégia p/ debugar!
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api
      .post("/users", { name, email, password })
      // executa se tudo der certo
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/")// navega p/ pág signin
      })
      // executa se der errado
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message); // pegando msg do UsersController no backend, q já checa por lá se o usuário existe!
        } else {
          alert("Não foi possível cadastrar!")
        }
      });
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>RocketNotes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Crie sua conta</h2>
        <Input
          type="text"
          placeholder="Nome"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        {/* onChange é fcn q dispara um evento toda vez q o valor do input muda*/}
        <Input
          type="text"
          placeholder="E-mail"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Cadastrar" onClick={handleSignUp} />
        <Link to="/">Voltar para o login</Link>
      </Form>
    </Container>
  );
}
