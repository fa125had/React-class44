import Product from "./Product";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

const ProductsList = ({ selectedCategory }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      // fetch products based on category
      try {
        setError(null);
        setLoading(true);

        const endpoint = selectedCategory
          ? `https://fakestoreapi.com/products/category/${selectedCategory}`
          : "https://fakestoreapi.com/products?limit=15";
        const res = await fetch(endpoint);
        if (res.status !== 200) throw new Error("Error API Response");
        const products = await res.json();

        setProducts(products);

        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

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
          <ul className="products-list">
            {products.map((product) => {
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
      )}
    </>
  );
};

export default ProductsList;
