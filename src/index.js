import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Product from "./components/Product";
import StoreR from "./components/StoreR";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ChakraProvider>
        <App />
      </ChakraProvider>
    ),
    children: [
      { path: "/", element: <StoreR /> },
      { path: "/Product/:id", element: <Product /> },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
