import { Routes, Route, Navigate } from "react-router-dom";

// importando as páginas acesso geral:
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export function AuthRoutes() {
  const user = localStorage.getItem("@rockenotes:user"); // pegando user direto do localstorage. Assim, configuramos q o tratamento das rotas disponíveis só sera renderizado se user for null. (Proteção contra favoritação nos browsers.)

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />

      {/* 
P/ tratamento de rotas indisponíveis! O react router dom escaneia as rotas e quando chega aqui, detecta a rota indisponível e redireciona para o componete signin.
Ideia do else! Se nenhuma das condições acima forem atendidas, executa a rota abaixo!
Tb chamda de rota de fallback.
*/}
     {!user && <Route path="*" element={<Navigate to="/" />} />}
    </Routes>
  );
}
