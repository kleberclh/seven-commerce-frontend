import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api/axios";

export default function EditProduct() {
  const navigate = useNavigate();
  const { uuid } = useParams();
  const [produto, setProduto] = useState({
    titulo: "",
    descricao: "",
    preco: "",
    quantidade: "",
  }); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!uuid) return;
    api
      .get(`/produto/${uuid}`)
      .then((response) => {
        
        
        setProduto({
          titulo: response.data.data.titulo || "",
          descricao: response.data.data.descricao || "",
          preco: response.data.data.preco || "",
          quantidade: response.data.data.quantidade || "",
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar produto:", error);
        setLoading(false);
      });
  }, [uuid]);



  const handleChange = (e) => {
    const { name, value } = e.target;

   
    const newValue =
      name === "preco" || name === "quantidade" ? Number(value) : value;

    setProduto((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put(`/produto/${uuid}`, produto);

      if (response.status === 200 || response.status === 204) {
        alert("Produto atualizado com sucesso!");
        navigate("/auth/criar-produtos");
      } else {
        alert("Erro ao atualizar produto. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
      alert(
        "Erro ao atualizar produto. Verifique os campos e tente novamente."
      );
    }
  };

  if (loading) {
    return <p className="text-center mt-10">Carregando produto...</p>;
  }

  if (!produto) {
    return <p className="text-center mt-10">Produto não encontrado.</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-semibold mb-4">Editar Produto</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Título</label>
          <input
            type="text"
            name="titulo"
            value={produto.titulo}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Descrição</label>
          <textarea
            name="descricao"
            value={produto.descricao}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700">Preço (R$)</label>
          <input
            type="number"
            name="preco"
            value={produto.preco}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Quantidade</label>
          <input
            type="number"
            name="quantidade"
            value={produto.quantidade}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Salvar Alterações
        </button>
      </form>
    </div>
  );
}
