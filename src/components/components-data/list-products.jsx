import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

export default function ListProducts() {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProdutos();
  }, []);

  const fetchProdutos = () => {
    api
      .get("/produtos")
      .then((response) => {
        setProdutos(response.data.produto);
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
      });
  };

  const handleDelete = async (uuid) => {
    if (!window.confirm("Tem certeza que deseja excluir este produto?")) return;

    try {
      await api.delete(`/produtos/${uuid}`);
      setProdutos(produtos.filter((produto) => produto.uuid !== uuid));
    } catch (error) {
      console.error("Erro ao excluir produto:", error);
    }
  };

  const handleEdit = (uuid) => {
    navigate(`/auth/editar-produto/${uuid}`);
  };

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
                  key={produto.uuid}
                  className="hover:bg-gray-100 transition duration-300"
                >
                  <td className="px-6 py-4 text-gray-800">{produto.uuid}</td>
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
                    <button
                      onClick={() => handleEdit(produto.uuid)}
                      className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
                    >
                      ✏️
                    </button>
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    <button
                      onClick={() => handleDelete(produto.uuid)}
                      className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700"
                    >
                      ❌
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
