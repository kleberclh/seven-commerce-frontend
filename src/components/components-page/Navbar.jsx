import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Ícones do menu

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-gray-900 shadow-md text-gray-300">
      <nav className="flex justify-between items-center max-w-7xl mx-auto p-4">
        {/* LOGO */}
        <h1 className="text-2xl font-bold text-white">Seven Commerce</h1>

        {/* MENU DESKTOP */}
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
          <li>
            <a
              href="/login"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="/register"
              className="px-4 py-2 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition"
            >
              Registro
            </a>
          </li>
          <li>
            <a
              href="/meu-perfil"
              className="px-4 py-2 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition"
            >
              Meu Perfil
            </a>
          </li>
        </ul>

        {/* MENU MOBILE */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* MENU MOBILE (TOGGLABLE) */}
        {menuOpen && (
          <ul className="absolute top-14 left-0 w-full bg-gray-900 p-5 flex flex-col items-center gap-4 md:hidden">
            <li>
              <a href="/" className="block py-2 hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block py-2 hover:text-white transition"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block py-2 hover:text-white transition"
              >
                Contato
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="block py-2 bg-blue-600 text-white rounded-md w-full text-center hover:bg-blue-500 transition"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="/register"
                className="block py-2 border border-blue-600 rounded-md w-full text-center hover:bg-blue-600 hover:text-white transition"
              >
                Registrar
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
