import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Importando useNavigate
import api from "../../api/axios";

export default function ListOrders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate(); // Criando a função de navegação

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    api
      .get("/order")
      .then((response) => {
        setOrders(response.data.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar as ordens:", error);
      });
  };

  const handleView = (uuid) => {
    navigate(`/auth/ver-detalhes/${uuid}`); // Redireciona para a página de detalhes do pedido
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Lista de Pedidos
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow">
            <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                  Usuário ID
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                  Cliente
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                  Total (R$)
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                  Ver Detalhes
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-gray-100 transition duration-300"
                >
                  <td className="px-6 py-4 text-gray-800">{order.id}</td>
                  <td className="px-6 py-4 text-gray-900 font-medium">
                    {order.usuarioId}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {order.usuario.name}
                  </td>
                  <td className="px-6 py-4 text-green-600 font-semibold">
                    R$ {order.total.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-gray-900 font-medium">
                    {order.status}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    <button
                      onClick={() => handleView(order.uuid)}
                      className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
                    >
                      🔍 Ver
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
