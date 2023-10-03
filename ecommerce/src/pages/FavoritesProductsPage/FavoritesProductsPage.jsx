import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useFavorites } from "../../context/FavoriteContext";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import "./favorites-products-page.css";

const FavoritesProductsPage = () => {
  const { favorites } = useFavorites(); // Use the hook
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      try {
        setLoading(true);
        const fetchPromises = favorites.map((id) =>
          fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
            res.json()
          )
        );
        const fetchedProducts = await Promise.all(fetchPromises);
        setFavoriteProducts(fetchedProducts);
      } catch (err) {
        setError("Failed to fetch favorite products");
      } finally {
        setLoading(false);
      }
    };

    if (favorites.length > 0) {
      fetchFavoriteProducts();
    }
  }, [favorites]);

  const handleClick = (productID) => {
    navigate(`/product/${productID}`);
  };

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
    <div className="favPage-container">
      <Navbar />
      <h2 className="favPage-title">Favorites Products</h2>
      <ul className="favPage-list">
        {favoriteProducts.map((product) => (
          <li className="favPage-item" key={product.id} onClick={() => handleClick(product.id)}>
            <h3 className="fav-product-title">{product.title}</h3>
            <img className="fav-product-image" src={product.image} alt={product.title}/>
            <p className="fav-product-price">{product.price}$</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesProductsPage;
