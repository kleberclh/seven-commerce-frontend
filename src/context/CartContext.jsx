import React, { createContext, useContext, useState } from "react";

// Contexto para o carrinho
const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const saveCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      saveCart(updatedCart);
    } else {
      saveCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (productId, change) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === productId) {
          const updatedQuantity = item.quantity + change;
          if (updatedQuantity <= 0) {
            // Se a quantidade for 0 ou negativa, remove o produto
            return null;
          }
          return { ...item, quantity: updatedQuantity };
        }
        return item;
      })
      .filter(Boolean); // Remove os produtos nulos (quando a quantidade chega a 0)

    saveCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    saveCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
