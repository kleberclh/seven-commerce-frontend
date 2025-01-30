import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Users,
  ShoppingCart,
  BarChart2,
  Settings,
} from "lucide-react";
import Button from "../ui/button";

export default function DashboardLayout() {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-5 flex flex-col">
        <h1 className="text-xl font-bold text-gray-700 mb-6">
          Seven E-commerce
        </h1>

        <nav className="flex-1">
          <ul className="space-y-4">
            <li>
              <NavLink
                to="/auth/dashboard"
                className="flex items-center gap-3 text-gray-600 hover:text-blue-600 p-2 rounded-lg hover:bg-gray-200 transition"
              >
                <LayoutDashboard size={20} />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/auth/criar-produtos"
                className="flex items-center gap-3 text-gray-600 hover:text-blue-600 p-2 rounded-lg hover:bg-gray-200 transition"
              >
                <Package size={20} />
                Produtos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/auth/clientes"
                className="flex items-center gap-3 text-gray-600 hover:text-blue-600 p-2 rounded-lg hover:bg-gray-200 transition"
              >
                <Users size={20} />
                Clientes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/auth/vendas"
                className="flex items-center gap-3 text-gray-600 hover:text-blue-600 p-2 rounded-lg hover:bg-gray-200 transition"
              >
                <ShoppingCart size={20} />
                Vendas
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/auth/relatorios"
                className="flex items-center gap-3 text-gray-600 hover:text-blue-600 p-2 rounded-lg hover:bg-gray-200 transition"
              >
                <BarChart2 size={20} />
                Relatórios
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/auth/configuracoes"
                className="flex items-center gap-3 text-gray-600 hover:text-blue-600 p-2 rounded-lg hover:bg-gray-200 transition"
              >
                <Settings size={20} />
                Configurações
              </NavLink>
            </li>
          </ul>
        </nav>
        <div>
          <Button
            className="border bg-red-700 text-white py-1 px-5 rounded-lg hover:bg-red-600"
            onClick={handleLogout}
          >
            Sair
          </Button>
        </div>
      </aside>

      {/* Conteúdo Principal */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
