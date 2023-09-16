import Product from "./Product";
import productsData from "../fake-data/all-products";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

const ProductsList = ({ selectedCategory }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Simulate an API fetch with a timeout
    setTimeout(() => {
      setProducts(productsData);
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const filteredByCategory = products.filter(
        (product) => `FAKE: ${product.category}` === selectedCategory
      );

      setFilteredProducts(filteredByCategory);
    } else {
      setFilteredProducts(productsData);
    }
  }, [selectedCategory, products]);

  if (loading) {
    return (
      <div className="spinner">
        <ClipLoader />
      </div>
    );
  }

  return (
    <section className="products-container">
      <ul className="products-list">
        {filteredProducts.map((product) => {
          return (
            <Product
              key={product.id}
              title={product.title}
              imgURL={product.image}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default ProductsList;
