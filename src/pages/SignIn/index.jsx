import { useState } from "react"; // estado p/ armazenar informações inseridas nos inputs
import { Container, Form, Background } from "./styles";
import { Link } from "react-router-dom"; // p/ navegação

import { useAuth } from "../../hooks/auth"; // importe ctxt específico

import { FiMail, FiLock } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth(); // acessando o hook

  // CONCEITO: handle é um padrão p/ fcns q são disparadas em decorrência d euma interação do usuário.
  function handleSignIn() {
    signIn({ email, password }); // envia p/ fcn signIn lá no auth.jsx q precisa desses campos.
  }

  return (
    <Container>
      <Form>
        <h1>RocketNotes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>
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
        <Button title="Entrar" onClick={handleSignIn} />
        <Link to="/register">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  );
}
