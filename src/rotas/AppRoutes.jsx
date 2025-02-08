import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RotasProtegidas from "./RotasProtegidas";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";
import Layout from "../components/components-page/Layout";
import Perfil from "../pages/Perfil";
import Checkout from "../pages/Checkout";
import Sucesso from "../pages/Sucesso";
import Cancel from "../pages/Cancel";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="contato" element={<Contato />} />
          <Route path="meu-perfil" element={<Perfil />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="success" element={<Sucesso />} />
          <Route path="cancel" element={<Cancel />} />
        </Route>

        {/* rotas protegidas */}
        <Route path="/auth/*" element={<RotasProtegidas />} />
      </Routes>
    </Router>
  );
}
