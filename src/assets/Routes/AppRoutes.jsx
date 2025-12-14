import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Form from "../pages/Form";
import FormUsuario from "../pages/FormUsuario";
import Config from "../pages/Config";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro-usuario" element={<FormUsuario />} />
      <Route path="/formulario" element={<Form />} />
      <Route path="/configuracoes" element={<Config />} />
    </Routes>
  );
};

export default AppRoutes;
