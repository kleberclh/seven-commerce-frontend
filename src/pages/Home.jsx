import React from "react";
import Navbar from "../components/components-page/Navbar";
import Carrousel from "../components/components-page/Carrousel";
import Produtos from "../components/components-page/Produtos";
import Layout from "../components/Layout";
export default function Home() {
  return (
    <>
      <Carrousel />
      <Produtos />
    </>
  );
}
