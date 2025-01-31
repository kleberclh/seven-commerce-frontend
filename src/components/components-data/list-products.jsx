import React, { useEffect, useState } from "react";
import api from "../../api/axios";

export default function ListProducts() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api
      .get("/produtos")
      .then((response) => {
        setProdutos(response.data.produto);
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
      });
  }, []);

  return (
    <div className="p-6 bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Lista de Produtos
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow">
            <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                  Título
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                  Descrição
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                  Preço (R$)
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                  Quantidade
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {produtos.map((produto) => (
                <tr
                  key={produto.id}
                  className="hover:bg-gray-100 transition duration-300"
                >
                  <td className="px-6 py-4 text-gray-800">{produto.id}</td>
                  <td className="px-6 py-4 text-gray-900 font-medium">
                    {produto.titulo}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {produto.descricao}
                  </td>
                  <td className="px-6 py-4 text-green-600 font-semibold">
                    R$ {produto.preco.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-gray-800">
                    {produto.quantidade}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
