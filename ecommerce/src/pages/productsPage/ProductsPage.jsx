import CategoriesList from "../../components/CategoriesList/CategoriesList.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import ProductsList from "../../components/ProductsList/ProductsList.jsx";
import { useState } from "react";
import "./products-page.css";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <>
      <header>
        <h1 className="main-title">Products</h1>
        <section className="main-menu">
          <CategoriesList
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <Navbar />
        </section>
      </header>
      <main>
        <ProductsList selectedCategory={selectedCategory} />
      </main>
    </>
  );
};

export default ProductsPage;
