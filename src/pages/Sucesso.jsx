import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Success() {
  const { clearCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    clearCart(); // Limpa o carrinho após a compra bem-sucedida
    setTimeout(() => {
      navigate("/"); // Redireciona para a Home após 5 segundos
    }, 5000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold text-green-600">
        Compra realizada com sucesso! 🎉
      </h1>
      <p className="text-gray-700 mt-2">Obrigado por sua compra.</p>
      <p className="text-gray-500">
        Você será redirecionado para a página inicial em instantes.
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Voltar para a Loja
      </button>
    </div>
  );
}
