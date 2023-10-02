import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import "../ProductDetailPage/productDetailPage.css";
import { useAPI } from "../../hooks/useAPI";
import Navbar from "../../components/Navbar/Navbar";

const ProductDetailPage = () => {
  const { productID } = useParams();
  const endpoint = `https://fakestoreapi.com/products/${productID}`;

  const { data: product, loading, error } = useAPI(endpoint);

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
      <section className="product-detail-container">
        {product ? (
          <section className="product-details">
            <header>
              <h2 className="product-title">{product.title}</h2>
            </header>
            <article>
              <img src={`${product.image}`} alt={`${product.title}`} />
              <p className="product-description">{product.description}</p>
            </article>
            <div>
              <p className="product-price">Price: {product.price}</p>
              <p className="product-rating">
                Rate: {product.rating.rate} of {product.rating.count} Votes
              </p>
            </div>

            <Navbar />
          </section>
        ) : (
          <ClipLoader />
        )}
      </section>
    </>
  );
};

export default ProductDetailPage;
