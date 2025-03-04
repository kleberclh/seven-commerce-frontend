import { useState, useEffect } from "react";
import api from "../api/axios"; // Certifique-se de que o axios está configurado corretamente

export const useUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.get("/me"); // Rota que retorna os dados do usuário
        setUser(response.data);
        console.log(response.data);
      } catch (err) {
        setError("Realize o login para ter acesso ao seu perfil!");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return { user, loading, error };
};
