import React, { useState } from "react";
import { createProduct } from "../../services/productService";

export default function CreateProduto() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [quantidade, setQuantidade] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const produtoData = {
      titulo,
      descricao,
      preco: parseFloat(preco),
      quantidade: parseFloat(quantidade),
    };

    try {
      await createProduct(produtoData);
      alert("Produto criado com sucesso!");

     
      setTitulo("");
      setDescricao("");
      setPreco("");
      setQuantidade("");
    } catch (error) {
      console.error("Erro ao criar produto:", error);
      alert("Erro ao criar produto");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Criar Produto</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm font-medium">Nome do Produto</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium">Descrição</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          ></textarea>
        </div>
        <div>
          <label className="text-sm font-medium">Preço</label>
          <input
            type="number"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium">Quantidade</label>
          <input
            type="number"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        {/* Se precisar de upload de imagem, descomente essa parte */}
        {/* <div>
          <label className="text-sm font-medium">Imagem</label>
          <input type="file" onChange={handleFileChange} className="w-full p-2 border rounded-md" />
        </div> */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Criar Produto
        </button>
      </form>
    </div>
  );
}
