import React, { useState } from "react";
import {
  FaDollarSign,
  FaUsers,
  FaBox,
  FaCheckCircle,
  FaClock,
  FaHourglassHalf,
} from "react-icons/fa";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Configuração do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ListDashboard() {
  const [period, setPeriod] = useState("30d");

  // Dados fictícios para os cards
  const stats = {
    "7d": {
      vendas: "R$ 25.450",
      clientes: "230",
      produtos: "280",
      finalizadas: "165",
      pendentes: "13",
      confirmacao: "4",
    },
    "30d": {
      vendas: "R$ 125.450",
      clientes: "1.230",
      produtos: "280",
      finalizadas: "765",
      pendentes: "43",
      confirmacao: "12",
    },
    "6m": {
      vendas: "R$ 625.450",
      clientes: "7.230",
      produtos: "280",
      finalizadas: "3.765",
      pendentes: "123",
      confirmacao: "32",
    },
    "1y": {
      vendas: "R$ 1.525.450",
      clientes: "14.530",
      produtos: "280",
      finalizadas: "7.654",
      pendentes: "243",
      confirmacao: "54",
    },
  };

  const statCards = [
    {
      title: "Valor de Vendas",
      value: stats[period].vendas,
      icon: <FaDollarSign />,
      color: "bg-green-500",
    },
    {
      title: "Clientes",
      value: stats[period].clientes,
      icon: <FaUsers />,
      color: "bg-blue-500",
    },
    {
      title: "Produtos Cadastrados",
      value: stats[period].produtos,
      icon: <FaBox />,
      color: "bg-yellow-500",
    },
    {
      title: "Vendas Finalizadas",
      value: stats[period].finalizadas,
      icon: <FaCheckCircle />,
      color: "bg-indigo-500",
    },
    {
      title: "Vendas Pendentes",
      value: stats[period].pendentes,
      icon: <FaClock />,
      color: "bg-orange-500",
    },
    {
      title: "Pendentes de Confirmação",
      value: stats[period].confirmacao,
      icon: <FaHourglassHalf />,
      color: "bg-red-500",
    },
  ];

  // Dados dinâmicos dos gráficos
  const salesData = {
    "7d": [5000, 4000, 5500, 6200, 5800, 7000, 7500],
    "30d": [10000, 12000, 15000, 14000, 18000, 20000],
    "6m": [40000, 45000, 50000, 47000, 52000, 60000],
    "1y": [90000, 95000, 100000, 110000, 120000, 130000],
  };

  const categorySalesData = {
    "7d": [5000, 2000, 3000, 2500, 1000],
    "30d": [40000, 25000, 18000, 22000, 15000],
    "6m": [90000, 60000, 50000, 45000, 30000],
    "1y": [180000, 120000, 100000, 95000, 60000],
  };

  return (
    <div className="bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Painel</h1>

        {/* Filtros */}
        <div className="flex space-x-4 mb-6">
          {["7d", "30d", "6m", "1y"].map((p) => (
            <button
              key={p}
              className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                period === p
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-700 border"
              }`}
              onClick={() => setPeriod(p)}
            >
              {p === "7d"
                ? "Últimos 7 dias"
                : p === "30d"
                ? "Últimos 30 dias"
                : p === "6m"
                ? "Últimos 6 meses"
                : "Último ano"}
            </button>
          ))}
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {statCards.map((stat, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 flex items-center space-x-4 hover:shadow-xl transition duration-300"
            >
              <div
                className={`${stat.color} text-white p-4 rounded-full text-2xl`}
              >
                {stat.icon}
              </div>
              <div>
                <p className="text-gray-600">{stat.title}</p>
                <h2 className="text-xl font-bold">{stat.value}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Gráficos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Vendas Mensais
            </h2>
            <Line
              data={{
                labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
                datasets: [
                  {
                    label: "Vendas (R$)",
                    data: salesData[period],
                    borderColor: "#4F46E5",
                    backgroundColor: "rgba(79, 70, 229, 0.2)",
                    fill: true,
                  },
                ],
              }}
            />
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Vendas por Categoria
            </h2>
            <Bar
              data={{
                labels: [
                  "Eletrônicos",
                  "Roupas",
                  "Alimentos",
                  "Beleza",
                  "Esportes",
                ],
                datasets: [
                  {
                    label: "Vendas por Categoria (R$)",
                    data: categorySalesData[period],
                    backgroundColor: [
                      "#3B82F6",
                      "#F59E0B",
                      "#10B981",
                      "#EF4444",
                      "#6366F1",
                    ],
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
