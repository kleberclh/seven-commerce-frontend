import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthRouter from "./AuthRouter";
import DashboardLayout from "../components/components-admin/dashboard-layout";
import CriarProdutos from "../components/components-data/criar-produtos";


export default function RotasProtegidas() {
  return (
    <Routes>
      <Route
        path="/auth/dashboard"
        element={
          <AuthRouter>
            <DashboardLayout />
          </AuthRouter>
        }
      />
      <Route path="criar-produtos" element={<CriarProdutos />} />
    </Routes>
  );
}
