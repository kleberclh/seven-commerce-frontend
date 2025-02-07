import { useState } from "react";
import axios from "axios";

const CheckoutButton = ({ produtos }) => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token"); // Se usa autenticação JWT
      const response = await axios.post(
        "http://localhost:5000/api/checkout",
        { produtos },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      window.location.href = response.data.url; // Redireciona para Stripe Checkout
    } catch (error) {
      console.error("Erro ao criar checkout:", error);
      alert("Erro ao processar pagamento!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className="bg-blue-500 text-white py-2 px-4 rounded"
      onClick={handleCheckout}
      disabled={loading}
    >
      {loading ? "Processando..." : "Comprar"}
    </button>
  );
};

export default CheckoutButton;
