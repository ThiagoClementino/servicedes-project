import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./assets/Routes/AppRoutes";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
