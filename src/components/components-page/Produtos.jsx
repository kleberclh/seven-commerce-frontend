import React from "react";

const products = [
  {
    id: 1,
    name: "Headphone Bluetooth",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Smartwatch X-Pro",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Smartwatch X-Pro",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Smartwatch X-Pro",
    image: "https://via.placeholder.com/150",
  },
];

const ProductCard = ({ name, image }) => {
  return (
    <div className="border w-56 bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-xl shadow-lg text-white">
      <img
        src={image}
        alt={name}
        className="w-full h-36 object-cover rounded-md"
      />
      <h3 className="mt-3 text-center text-lg font-semibold">{name}</h3>
      <button className="w-full mt-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 hover:scale-105 transition-all">
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

const ProductList = () => {
  return (
    <div className="text-center">
        <h1 className="mt-10 text-3xl">Produtos em Destaque</h1>
      <div className="flex gap-8 justify-center mt-20">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
