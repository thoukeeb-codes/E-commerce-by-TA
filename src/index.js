import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Product from "./components/Product";
import StoreR from "./components/StoreR";
import reportWebVitals from "./reportWebVitals";
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
