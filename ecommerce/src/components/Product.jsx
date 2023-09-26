import { useNavigate } from "react-router-dom";

const Product = ({product}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <li className="product" onClick={handleClick}>
      <img
        className="product-image"
        src={product.image}
        alt={product.title}
        title={product.title}
      />
      <p className="product-title">{product.title}</p>
    </li>
  );
};

export default Product;
