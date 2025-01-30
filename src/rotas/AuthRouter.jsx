import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const AuthRouter = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" replace />;
  }

  try {
    const decoded = jwtDecode(token);

    // Verifica se o usuário é admin
    if (decoded?.isAdmin) {
      return children;
    } else {
      console.warn("Acesso negado: Usuário não é administrador.");
      return <Navigate to="/" replace />;
    }
  } catch (error) {
    console.error("Erro ao decodificar o token:", error);
    return <Navigate to="/" replace />;
  }
};

export default AuthRouter;
