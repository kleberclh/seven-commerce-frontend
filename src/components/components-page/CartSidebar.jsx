import React from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartSidebar() {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Calcula o total geral do carrinho
  const total = cart.reduce((acc, item) => {
    // Verifique se o preço é um número válido
    const preco = isNaN(item.preco) ? 0 : item.preco;
    return acc + preco * item.quantity;
  }, 0);

  return (
    <div className="fixed right-0 top-0 h-full w-72 bg-gray-900 text-white p-4 shadow-lg overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Carrinho</h2>

      {cart.length === 0 ? (
        <p className="text-gray-400">Seu carrinho está vazio.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="mb-4 p-3 bg-gray-800 rounded">
              <h3 className="text-lg">{item.titulo}</h3>
              <p className="text-gray-400">R$ {item.preco.toFixed(2)}</p>

              <div className="flex items-center gap-2 mt-2">
                <button
                  className="bg-red-500 px-2 py-1 rounded text-white"
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  -
                </button>
                <span className="text-lg">{item.quantity}</span>
                <button
                  className="bg-green-500 px-2 py-1 rounded text-white"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  +
                </button>
              </div>

              <p className="text-gray-300 mt-1">
                Total: R$ {(item.preco * item.quantity).toFixed(2)}
              </p>
              <button
                className="mt-2 text-red-400 hover:text-red-300"
                onClick={() => removeFromCart(item.id)}
              >
                Remover
              </button>
            </div>
          ))}

          <p className="text-lg font-bold mt-4">Total: R$ {total.toFixed(2)}</p>
          <button
            onClick={() => navigate("/checkout")}
            className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
          >
            Finalizar Compra
          </button>
        </div>
      )}
    </div>
  );
}
