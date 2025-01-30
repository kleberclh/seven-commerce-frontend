import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Correção da importação

const AuthRouter = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" replace />;
  }

  try {
    const decoded = jwtDecode(token);

    if (decoded.isAdmin) {
      return children;
    } else {
      return <Navigate to="/" replace />;
    }
  } catch (error) {
    console.error("Token inválido:", error);
    return <Navigate to="/" replace />;
  }
};

export default AuthRouter;
