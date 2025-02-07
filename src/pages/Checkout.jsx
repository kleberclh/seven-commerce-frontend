import React from "react";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.preco * item.quantity, 0);

  const handleCheckout = () => {
    alert("Compra realizada com sucesso!");
    clearCart();
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      {cart.length === 0 ? (
        <p className="text-gray-400">Seu carrinho está vazio.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between text-black border-b py-2">
                <span>{item.titulo} ({item.quantity})</span>
                <span>R$ {item.preco.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-bold text-black mt-4">Total: R$ {total.toFixed(2)}</h3>
          <button onClick={handleCheckout} className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
            Finalizar Compra
          </button>
        </div>
      )}
    </div>
  );
}
