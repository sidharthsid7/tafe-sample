import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PotatoTable from "./contents/PotatoTable";
import Login from "./auth/login/Login";

const Router = () => {
  const isLoggedIn = window.localStorage.getItem("isLoggedInTafe");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={isLoggedIn ? <PotatoTable /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
