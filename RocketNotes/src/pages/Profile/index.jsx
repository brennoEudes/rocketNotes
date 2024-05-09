import { Link } from "react-router-dom"; // p/ navegação

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Container, Form, Avatar } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  return (
    <Container>
      <header>
       <Link to="/">
       <FiArrowLeft />
       </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/brennoeudes.png" alt="Foto do usuário" />
          {/* htmlFor vincula o label com o input */}
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>
        <Input type="text" placeholder="Nome" icon={FiUser} />
        <Input type="text" placeholder="E-mail" icon={FiMail} />
        <Input type="password" placeholder="Senha Atual" icon={FiLock} />
        <Input type="password" placeholder="Nova senha" icon={FiLock} />
        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
