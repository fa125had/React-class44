import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

const ProductDetailPage = () => {
  const { productID } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setError(null);
      setLoading(true);
      const fetchProduct = async () => {
        const res = await fetch(
          `https://fakestoreapi.com/products/${productID}`
        );
        if (res.status !== 200) throw new Error("Error API Response");
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      };
      fetchProduct();
    } catch (error) {
      setError(error);
    }
  }, [productID]);

  if (loading) {
    return (
      <div className="spinner">
        <ClipLoader />
      </div>
    );
  }

  console.log(product);
  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
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
            </section>
          ) : (
            <ClipLoader />
          )}
        </section>
      )}
    </>
  );
};

export default ProductDetailPage;
