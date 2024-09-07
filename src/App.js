import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
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
