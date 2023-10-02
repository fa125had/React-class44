import "./App.css";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
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
