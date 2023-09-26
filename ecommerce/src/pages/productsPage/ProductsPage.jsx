import CategoriesList from "../../components/CategoriesList.jsx";
import ProductsList from "../../components/ProductsList.jsx";
import { useState } from "react";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <main>
      <h1>Products</h1>
      <CategoriesList
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductsList selectedCategory={selectedCategory} />
    </main>
  );
};

export default ProductsPage;
