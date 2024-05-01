import Store from "./Store";
import { useState, useEffect } from "react";
import axios from "axios";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Product from "./Product";

function StoreR() {
  const [storeItem, setStoreItem] = useState([
    { title: "Computer", price: 20 },
    { title: "cd Games", price: 30 },
    { title: "keyboard", price: 50 },
  ]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(({ data }) => {
      setLoading(false);
      setStoreItem(data);
    });
  }, []);
  return (
    <Store
      items={storeItem}
      loading={loading}
      onItemAdd={(itemData) => {
        setStoreItem([...storeItem, itemData]);
      }}
    />
  );
}
export default StoreR;
