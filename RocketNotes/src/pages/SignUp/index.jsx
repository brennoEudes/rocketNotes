import { Container, Form, Background } from "./styles";

import { FiMail, FiLock, FiUser} from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <h1>RocketNotes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>
        <Input type="text" placeholder="Nome" icon={FiUser}  />
        <Input type="text" placeholder="E-mail" icon={FiMail} />
        <Input type="password" placeholder="Senha" icon={FiLock} />
        <Button title="Cadastrar" />
        <a href="#">Voltar para o login</a>
      </Form>
    </Container>
  );
}