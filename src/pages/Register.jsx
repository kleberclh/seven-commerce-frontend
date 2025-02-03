import React, { useState } from "react";
import Input from "../components/ui/input";
import Button from "../components/ui/button";
import { userHook } from "../hooks/userHook";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { register } = userHook();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(name, email, password);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-[500px] bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Register</h1>

        <form className="flex flex-col space-y-4" onSubmit={handleRegister}>
          <span></span>
          <Input
            type="text"
            placeholder="Digite seu Nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <Input
            type="email"
            placeholder="Digite seu E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <Input
            type="password"
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <Button type="submit" className="w-full">
            Registrar
          </Button>
        </form>
      </div>
    </div>
  );
}
