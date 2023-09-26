import "./App.css";
import ProductDetailPage from "./pages/productDetailPage/ProductDetailPage";
import ProductPage from "./pages/productPage/ProductPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<ProductPage />}>
            <Route path="product/:productID" element={<ProductDetailPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
