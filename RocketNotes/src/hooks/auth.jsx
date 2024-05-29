// Hooks: Centralizam toda a lógica de utilização dos ctxts:

import { createContext, useContext } from "react"; // famoso context API do react

export const AuthContext = createContext({}); // define o valor padrão do contexto (ex: obj vazio)

// lógica de ctxt no hook de auth:
function AuthProvider({ children }) {
  // recebendo o children do AuthProvider lá do main.js, no caso, é o componente Routes.
  return (
    <AuthContext.Provider
      value={{ name: "Brenno", email: "brenno@teste.com" }}
    > {/* O contexto provê um valor p/ todas as rotas */}
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
// preferência por exportar assim p/ ver tudo o q está sendo exportado no arquivo:
export { AuthProvider, useAuth };
