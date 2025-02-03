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
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                  Editar
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                  Excluir
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
                  <td className="px-6 py-4 text-gray-600">
                    <button className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                        />
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    <button className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </button>
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
