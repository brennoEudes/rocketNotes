import { useNavigate } from "react-router-dom"; // substitui "Link" p/ navegação
import { useState } from "react";

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Container, Form, Avatar } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  const { user, updateProfile } = useAuth();

  // passando os dados do ctxt c/ user autenticado, como valor inicial do estado:
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  // Não passamos a(s) senha(s) por questões de segurança
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl); // inicia com img default ou avatar do usuário
  const [avatarFile, setAvatarFile] = useState(null); // inicia sem avatar

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword,
    };
    const userUpdated = Object.assign(user, updated); // mét JS q sobescreve infos automaticamente, permitindo pegar todos os elementos atualizados!
    //return console.log(userUpdated);

    await updateProfile({ user: userUpdated, avatarFile }); // passando os dados atualizados p/ o backend
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]; // extraindo do event o arq da 1º posição!
    setAvatarFile(file); // guarda o arquivo selecionado

    // gera url p/ atualizar o estado q exibe o avatar:
    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handleBack}>
          <FiArrowLeft />
        </button>
      </header>

      <Form>
        <Avatar>
          {/* <img src="https://github.com/brennoeudes.png" alt="Foto do usuário" /> */}
          <img src={avatar} alt="Foto do usuário" />
          {/* htmlFor vincula o label com o input */}
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" onChange={handleChangeAvatar} />
          </label>
        </Avatar>
        <Input
          type="text"
          placeholder="Nome"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="E-mail"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha Atual"
          icon={FiLock}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Nova senha"
          icon={FiLock}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  );
}
