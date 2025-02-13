import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import AppRoutes from "./rotas/AppRoutes.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  </StrictMode>
);
