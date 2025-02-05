import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthRouter from "./AuthRouter";
import DashboardLayout from "../components/components-admin/dashboard-layout";
import Produto from "../pages/admin/Produto";
import Clientes from "../pages/admin/Clientes";
import Vendas from "../pages/admin/Vendas";
import Relatorios from "../pages/admin/Relatorios";
import Configuracoes from "../pages/admin/Configuracoes";
import ListDashboard from "../components/components-data/list-dashboard";
import EditProduct from "../components/components-data/edit-produto";
import CreateProduto from "../components/components-data/create-produto";
import ViewDetails from "../components/components-data/view-details";

export default function RotasProtegidas() {
  return (
    <Routes>
      {/* Layout encapsulando todas as rotas protegidas */}
      <Route
        path="/"
        element={
          <AuthRouter>
            <DashboardLayout />
          </AuthRouter>
        }
      >
        {/* Definir as rotas internas */}
        <Route path="dashboard" element={<ListDashboard />} />
        <Route path="criar-produtos" element={<Produto />} />
        <Route path="clientes" element={<Clientes />} />
        <Route path="vendas" element={<Vendas />} />
        <Route path="relatorios" element={<Relatorios />} />
        <Route path="configuracoes" element={<Configuracoes />} />
        <Route path="editar-produto/:uuid" element={<EditProduct />} />
        <Route path="novo-produto" element={<CreateProduto />} />
        <Route path="ver-detalhes/:uuid" element={<ViewDetails />} />
      </Route>
    </Routes>
  );
}
