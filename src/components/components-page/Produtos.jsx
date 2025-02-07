import React, { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import axios from "axios";

export default function Produtos() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get("http://localhost:5000/produtos")
      .then((response) => {
        if (response.data.success && Array.isArray(response.data.produto)) {
          setProducts(response.data.produto);
        }
      })
      .catch((error) => console.error("Erro ao buscar produtos:", error));
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 ml-80">
      <h2 className="text-2xl font-bold mb-4">Produtos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-800 p-4 rounded shadow-md">
            <h3 className="text-white text-lg">{product.titulo}</h3>
            <p className="text-gray-400">
              {/* Verifique se o preço é um número válido antes de exibir */}
              R$ {isNaN(product.preco) ? "Preço inválido" : product.preco.toFixed(2)}
            </p>
            <button
              onClick={() => addToCart(product)}
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
