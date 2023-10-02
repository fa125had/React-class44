import Product from "../Product/Product";
import { ClipLoader } from "react-spinners";
import "../ProductsList/product-list.css";
import { useAPI } from "../../hooks/useAPI";

const ProductsList = ({ selectedCategory }) => {
  const endpoint = selectedCategory
    ? `https://fakestoreapi.com/products/category/${selectedCategory}`
    : "https://fakestoreapi.com/products?limit=15";

  const { data: products, loading, error } = useAPI(endpoint);

  if (loading) {
    return (
      <div className="spinner">
        <ClipLoader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <>
      <section className="products-container">
        <ul className="products-list">
          {products && products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </ul>
      </section>
    </>
  );
};

export default ProductsList;
