import { useState } from "react";
import api from "../api/axios";
export const userHook = () => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await api.post("/login", { email, password });
      const {
        isAdmin,
        userId,
        token,
        name,
        user_uuid,
        user: loggedUser,
      } = response.data;

      localStorage.setItem("id", userId);
      localStorage.setItem("token", token);
      localStorage.setItem("name", name);
      localStorage.setItem("uuid", user_uuid);
      localStorage.setItem("adm", isAdmin);
      setUser(loggedUser);
    } catch (error) {
      console.error("Erro ao fazer login", error);
      throw error;
    }
  };

  const register = async (name, email, password) => {
    try {
      const response = await api.post("/registrar", { name, email, password });
      const { user: registeredUser } = response.data;
      setUser(registeredUser);
    } catch (error) {
      console.error("Erro ao fazer o registro", error);
      throw error;
    }
  };

  return { login, register };
};
