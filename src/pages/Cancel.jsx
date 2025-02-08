import { useNavigate } from "react-router-dom";

export default function Cancel() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center  text-center">
      <h1 className="text-3xl font-bold text-red-600">Compra cancelada ❌</h1>
      <p className="text-gray-700 mt-2">Parece que algo deu errado.</p>
      <p className="text-gray-500">
        Se precisar de ajuda, entre em contato conosco.
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
