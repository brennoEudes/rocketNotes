// rotas da aplicação c/ usuário logado:
import { Routes, Route, Navigate } from "react-router-dom";

// importando as páginas acessadas após o login:
import { Home } from "../pages/Home";
import { NewNote } from "../pages/NewNote";
import { Profile } from "../pages/Profile";
import { Details } from "../pages/Details";

export function AppRoutes() {
  return (
    <Routes>
      {/* Envolve todas as rotas */}
      <Route path="/" element={<Home />} />
      {/* P/ cada rota, informamos o endereço e o q será renderizado! */}
      <Route path="/new-note" element={<NewNote />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} /> {/* precisa do cód da nota, por isso add ":id" */}

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
