import React from "react";
import { Routes, Route } from "react-router-dom";

// Importações das páginas (Caminhos verificados no seu projeto)
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Form from "../pages/Form";
import FormUsuario from "../pages/FormUsuario";
import Config from "../pages/Config";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/cadastro-usuario" element={<FormUsuario />} />
      <Route path="/formulario" element={<Form />} />
      <Route path="/configuracoes" element={<Config />} />
    </Routes>
  );
};

export default AppRoutes;
