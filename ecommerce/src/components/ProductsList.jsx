import Product from "./Product";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

const ProductsList = ({ selectedCategory }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      // fetch products based on category
      try {
        const endpoint = selectedCategory
          ? `https://fakestoreapi.com/products/category/${selectedCategory}`
          : "https://fakestoreapi.com/products";
        const res = await fetch(endpoint);
        const products = await res.json();

        setProducts(products);
      } catch (error) {
        setError(error);
      }
    };

    setLoading(true);
    fetchProducts();
    setLoading(false);
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedCategory) {
      const filteredByCategory = products.filter(
        (product) => product.category === selectedCategory
      );

      setFilteredProducts(filteredByCategory);
    } else {
      setFilteredProducts(products);
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
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <section className="products-container">
          {filteredProducts ? (
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
          ) : (
            <p>Empty</p>
          )}
        </section>
      )}
    </>
  );
};

export default ProductsList;
