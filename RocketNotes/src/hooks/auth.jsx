// Hooks: Centralizam toda a lógica de utilização dos ctxts:

import { createContext, useContext, useEffect, useState } from "react"; // createContext é o famoso context API do react

import { api } from "../services/api"; // importe api p/ enviar dados p/ backend

export const AuthContext = createContext({}); // define o valor padrão do contexto (ex: obj vazio)

// lógica de ctxt no hook de auth:
function AuthProvider({ children }) {
  // Estados sempre no início da fcn:
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      // armazenando user info no local storage.
      // Boa prática: Padrão @ + nome da app: nome da chave
      // PARSE: JSON.stringify é fcn do json q converte obj em txt!
      localStorage.setItem("@rockenotes:user", JSON.stringify(user));
      localStorage.setItem("@rockenotes:token", token); // ñ precisa converter pois token é txt

      // LEITURA DE TRÁS PRA FRENTE!
      // inserindo um token do tipo bearer, de auth, no cabeçalho, por padrão, de todas as REQs do user!
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ user, token }); // armazenando infos

      console.log(user, token);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar!");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@rockenotes:token");
    localStorage.removeItem("@rockenotes:user");

    setData({}); // volta o estado c/ obj vazio
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile); // add campo avatar no form, passando o avatarFile

        const response = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      }

      await api.put("/users", user);
      localStorage.setItem("@rockenotes:user", JSON.stringify(user)); // atualiza a info do user no storage e estado

      setData({ user, token: data.token }); // pegando o token já existente
      alert("Perfil atualizado com sucesso!");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o perfil!");
      }
    }
  }

  // USEEFFECT
  // Boa prática: sempre perto do return
  // 1º parte (arrow fcn): o q queremos executar após a renderização?
  // 2º parte (vetor): estado dependente q quando mudado, executará o useeffect. Se vazio, será carregado uma vez após a renderização.
  useEffect(() => {
    const token = localStorage.getItem("@rockenotes:token");
    const user = localStorage.getItem("@rockenotes:user");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user), // retorna o formato dos dados do user de txt p/ obj json!
      });
    }
  }, []);

  // recebendo o children do AuthProvider lá do main.js, no caso, é o componente Routes.
  return (
    // compartilhando a fcn signIn e o estado "data" no provider (ctxt)
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        updateProfile,
        user: data.user,
      }}
    >
      {" "}
      {/* O contexto provê um valor p/ todas as rotas */}
      {children}
    </AuthContext.Provider>
  );
}

// fcn c/ ctxt
function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
// preferência por exportar assim p/ ver tudo o q está sendo exportado no arquivo:
export { AuthProvider, useAuth };
