import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthRouter from "./AuthRouter";
import DashboardLayout from "../components/dashboard-layout";
import CriarProdutos from "../components/criar-produtos";

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
