import React, { useState, useEffect } from "react";
import { useUser } from "../hooks/useUser"; // Importa o hook de usuário
import { jwtDecode } from "jwt-decode"; // Importa a função jwtDecode para decodificar o token

export default function Perfil() {
  const { user, loading, error } = useUser();
  const [isAdmin, setIsAdmin] = useState(false); // Estado para verificar se o usuário é admin

  useEffect(() => {
    // Verifica se o token existe e se é um admin
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setIsAdmin(decoded.isAdmin); // Armazena o valor de isAdmin
      } catch (error) {
        console.error("Erro ao decodificar o token:", error);
      }
    }
  }, []);

  if (loading) return <div className="text-center py-8">Carregando...</div>;
  if (error)
    return <div className="text-center py-8 text-red-500">{error}</div>;

  return (
    <div className="flex items-center justify-center bg-gray-50 py-10">
      {user ? (
        <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h1 className="text-2xl font-bold text-center text-indigo-600 mb-4">
            Seja Bem-Vindo, {user.name}! =)
          </h1>

          <div className="mb-6 space-y-4">
            <div className="flex justify-between items-center">
              <strong className="text-lg">Nome:</strong>
              <span>{user.name}</span>
            </div>
            <div className="flex justify-between items-center">
              <strong className="text-lg">Email:</strong>
              <span>{user.email}</span>
            </div>
            <div className="flex justify-between items-center">
              <strong className="text-lg">UUID:</strong>
              <span>{user.uuid}</span>
            </div>
          </div>

          {/* Botão exibido apenas para admins */}
          {isAdmin && (
            <div className="mt-8 text-center">
              <button className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                <a href="/auth/dashboard">Acessar Admin Panel</a>
              </button>
            </div>
          )}

          <div className="mt-4 text-center">
            <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
              Atualizar Perfil
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center text-lg text-gray-500">
          Usuário não encontrado.
        </div>
      )}
    </div>
  );
}
