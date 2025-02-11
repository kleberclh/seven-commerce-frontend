import { useState } from "react";
import axios from "axios";

const CheckoutButton = ({ produtos }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Adicionando estado para erros

  const handleCheckout = async () => {
    setLoading(true);
    setError(null); // Resetando o erro anterior
    const token = localStorage.getItem("token"); // Buscando o token JWT no localStorage

    try {
      const response = await axios.post(
        "http://localhost:5000/stripe/checkout",
        {
          produtos: produtos.map((item) => ({
            produtoId: item.id,
            quantidade: item.quantity, // Certifique-se de que `quantity` é o nome correto
          })),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Adicionando o token JWT ao cabeçalho
          },
        }
      );

      if (response.data.url) {
        window.location.href = response.data.url; // Redireciona para o Stripe
      }
    } catch (error) {
      console.error("Erro ao iniciar checkout:", error);
      setError("Erro ao iniciar o checkout. Tente novamente."); // Exibindo erro para o usuário
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {error && <p className="text-red-500 text-sm">{error}</p>}{" "}
      {/* Exibindo a mensagem de erro */}
      <button
        onClick={handleCheckout}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Processando..." : "Finalizar Compra"}
      </button>
    </div>
  );
};

export default CheckoutButton;
