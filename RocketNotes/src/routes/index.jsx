import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { user } = useAuth(); // acessando o user

  return (
    <BrowserRouter>
      {
        // se existir user, direciona p/ AppRoutes. Se não, AuthRoutes:
        user ? <AppRoutes /> : <AuthRoutes />
      }
    </BrowserRouter>
  );
}
