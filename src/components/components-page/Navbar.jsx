import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import CartSidebar from "./CartSidebar";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cart } = useCart();

  return (
    <header className="w-full bg-gray-900 shadow-md text-gray-300">
      <nav className="flex justify-between items-center max-w-7xl mx-auto p-4">
        <h1 className="text-2xl font-bold text-white">Seven Commerce</h1>

        <ul className="hidden md:flex gap-8 text-lg">
          <li className="hover:text-white transition">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-white transition">
            <a href="/sobre">Sobre</a>
          </li>
          <li className="hover:text-white transition">
            <a href="/contato">Contato</a>
          </li>
          <li className="hover:text-white transition">
            <a href="/login">Login</a>
          </li>
          <li className="hover:text-white transition">
            <a href="/meu-perfil">Meu Perfil</a>
          </li>
          <li>
            <button className="relative" onClick={() => setCartOpen(!cartOpen)}>
              <FaShoppingCart className="text-2xl text-white" />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-white text-xs px-2 rounded-full">
                  {cart.length}
                </span>
              )}
            </button>
          </li>
        </ul>

        {cartOpen && <CartSidebar />}

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
}
