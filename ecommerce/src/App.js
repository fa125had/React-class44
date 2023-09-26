import "./App.css";
import ProductDetailPage from "./pages/productDetailPage/ProductDetailPage";
import ProductsPage from "./pages/productsPage/ProductsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<ProductsPage />} />
          <Route path="/product/:productID" element={<ProductDetailPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
