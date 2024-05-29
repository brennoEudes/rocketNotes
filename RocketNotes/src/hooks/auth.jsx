// Hooks: Centralizam toda a lógica de utilização dos ctxts:

import { createContext, useContext, useState } from "react"; // createContext é o famoso context API do react

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

      // LEITURA DE TRÁS PRA FRENTE!
      // inserindo um token do tipo bearer, de auth, no cabeçalho, por padrão, de todas as REQs do user!
      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({user, token}); // armazenando infos

      console.log(user, token);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar!");
      }
    }
  }

  // recebendo o children do AuthProvider lá do main.js, no caso, é o componente Routes.
  return (
    // compartilhando a fcn signIn e o estado "data" no provider (ctxt)
    <AuthContext.Provider value={{ signIn, user: data.user }}>
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
