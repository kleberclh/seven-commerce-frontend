import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/axios";

export default function ViewDetails() {
  const { uuid } = useParams(); // Pegando o UUID da URL
  const [order, setOrder] = useState(null);

  useEffect(() => {
    api
      .get(`/order/${uuid}`) // Faz a requisição para pegar os detalhes do pedido
      .then((response) => {
        setOrder(response.data.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar detalhes do pedido:", error);
      });
  }, [uuid]);

  if (!order) {
    return <p className="text-center mt-6">Carregando detalhes do pedido...</p>;
  }

  return (
    <div className="p-6 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Detalhes do Pedido
        </h2>
        <p>
          <strong>ID do Pedido:</strong> {order.id}
        </p>
        <p>
          <strong>Cliente:</strong> {order.usuario.name} ({order.usuario.email})
        </p>
        <p>
          <strong>Total:</strong> R$ {order.total.toFixed(2)}
        </p>
        <p>
          <strong>Data do Pedido:</strong>{" "}
          {new Date(order.createdAt).toLocaleString()}
        </p>

        {/* Lista de Produtos */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6">
          Produtos do Pedido
        </h3>
        <ul className="mt-4">
          {order.produtos.map((item) => (
            <li key={item.id} className="border-b border-gray-300 py-2">
              <p>
                <strong>Produto:</strong> {item.produto.titulo}
              </p>
              <p>
                <strong>Descrição:</strong> {item.produto.descricao}
              </p>
              <p>
                <strong>Preço:</strong> R$ {item.precoUnitario.toFixed(2)}
              </p>
              <p>
                <strong>Quantidade:</strong> {item.quantidade}
              </p>
            </li>
          ))}
        </ul>

        <button
          onClick={() => window.history.back()}
          className="mt-4 px-4 py-2 text-sm font-semibold text-white bg-gray-600 rounded-lg hover:bg-gray-700"
        >
          ⬅️ Voltar
        </button>
      </div>
    </div>
  );
}
