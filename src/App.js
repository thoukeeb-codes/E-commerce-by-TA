import logo from "./logo.svg";
import "./App.css";
import Store from "./components/Store";
import { useState, useEffect } from "react";
import axios from "axios";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import StoreR from "./components/StoreR";
import Product from "./components/Product";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header title="E-commerce by TA" />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
