import { useNavigate } from "react-router-dom";
import { useFavorites } from "../../context/FavoriteContext";
import "../Product/product.css";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites(product.id);

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <li className="product">
      <span onClick={handleClick}>
        <img
          className="product-image"
          src={product.image}
          alt={product.title}
          title={product.title}
        />
        <p className="product-title">{product.title}</p>
      </span>

      <img
        className="favorite-icon"
        src={
          isFavorite ? "/assets/heart-solid.svg" : "/assets/heart-regular.svg"
        }
        alt="favorite"
        onClick={toggleFavorite}
      />
    </li>
  );
};

export default Product;
