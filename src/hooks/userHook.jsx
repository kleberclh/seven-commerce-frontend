import { useState } from "react";
import api from "../api/axios";
export const userHook = () => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await api.post("/login", { email, password });
      const { id, token, nome, uuid, user: loggedUser } = response.data;

      localStorage.setItem("id", id);
      localStorage.setItem("token", token);
      localStorage.setItem("nome", nome);
      localStorage.setItem("uuid", uuid);
      setUser(loggedUser);
    } catch (error) {
      console.error("Erro ao fazer login", error);
      throw error;
    }
  };

  return { login };
};
