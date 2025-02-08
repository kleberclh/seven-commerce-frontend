import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const Sucesso = () => {
  const [sessionId, setSessionId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("Processando pagamento...");
  const [error, setError] = useState(null);
  const [orderData, setOrderData] = useState(null);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const session_id = searchParams.get("session_id");

    if (!session_id) {
      setError("Sessão de pagamento inválida.");
      setLoading(false);
      return;
    }

    setSessionId(session_id);

    // Simula a validação do pagamento
    fetch(`http://localhost:5000/pagamento/status?session_id=${session_id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setMessage("Pagamento realizado com sucesso! 🎉");
          setOrderData(data.order);
        } else {
          setError("Falha ao confirmar pagamento.");
        }
      })
      .catch(() => setError("Erro ao validar pagamento."))
      .finally(() => setLoading(false));
  }, [searchParams]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md text-center">
        {loading ? (
          <p className="text-gray-600">🔄 {message}</p>
        ) : error ? (
          <p className="text-red-500">❌ {error}</p>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-green-600">🎉 Sucesso!</h2>
            <p className="text-gray-700">Seu pagamento foi confirmado.</p>
            {orderData && (
              <div className="mt-4">
                <p>
                  <strong>Pedido:</strong> #{orderData.id}
                </p>
                <p>
                  <strong>Valor:</strong> R$ {orderData.total.toFixed(2)}
                </p>
              </div>
            )}
          </div>
        )}

        <button
          className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
          onClick={() => navigate("/")}
        >
          Voltar à loja
        </button>
      </div>
    </div>
  );
};

export default Sucesso;
