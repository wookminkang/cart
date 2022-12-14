import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/product";
import Basket from "./pages/basket";
import { Layout } from "./components/Layout";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="cart" element={<Basket />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
