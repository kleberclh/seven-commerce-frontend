import React, { useEffect, useState } from "react";
import api from "../../api/axios";

export default function ListClients() {
  const [usuarios, setusuarios] = useState([]);

  useEffect(() => {
    api
      .get("/usuarios")
      .then((response) => {
        console.log("Dados recebidos:", response.data.data); // Debug
        setusuarios(response.data.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar os usuarios:", error);
      });
  }, []);
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Lista de Clientes
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow">
            <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                  Nome
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                  E-Mail
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {usuarios.map((usuario) => (
                <tr
                  key={usuario.id}
                  className="hover:bg-gray-100 transition duration-300"
                >
                  <td className="px-6 py-4 text-gray-800">{usuario.id}</td>
                  <td className="px-6 py-4 text-gray-900 font-medium">
                    {usuario.name}
                  </td>
                  <td className="px-6 py-4 text-gray-700">{usuario.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
