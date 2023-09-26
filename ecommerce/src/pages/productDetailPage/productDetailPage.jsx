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
    return <ClipLoader />;
  }

  console.log(productID, product);

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="product-detail-container">
          <h2 className="product-title">{product.title}</h2>
          {/* <p className="product-description">{product.description}</p> */}
          <p>Product</p>
        </div>
      )}
    </>
  );
};

export default ProductDetailPage;
