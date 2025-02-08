import { useState } from "react";
import axios from "axios";

const CheckoutButton = ({ produtos }) => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/stripe/checkout",
        {
          produtos: produtos.map((item) => ({
            produtoId: item.id,
            quantidade: item.quantity, // Certifique-se de que `quantity` é o nome correto
          })),
        }
      );

      if (response.data.url) {
        window.location.href = response.data.url; // Redireciona para o Stripe
      }
    } catch (error) {
      console.error("Erro ao iniciar checkout:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
      disabled={loading}
    >
      {loading ? "Processando..." : "Finalizar Compra"}
    </button>
  );
};

export default CheckoutButton;
