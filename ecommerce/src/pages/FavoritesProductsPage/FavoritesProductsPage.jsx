import Navbar from "../../components/Navbar/Navbar";
import { useFavorites } from "../../context/FavoriteContext";
import { ClipLoader } from "react-spinners";
import "./favorites-products-page.css";
import Product from "../../components/Product/Product";
import { useAPI } from "../../hooks/useAPI";

const FavoritesProductsPage = () => {
  const { favorites } = useFavorites();
  const endpoint = `https://fakestoreapi.com/products/`;
  const {
    data: favoriteProducts,
    loading,
    error,
  } = useAPI(endpoint, favorites);

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

      {favorites.length === 0 && <p>Nothing found...</p>}

      <ul className="favPage-list">
        {favoriteProducts ? (
          favoriteProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <ClipLoader />
        )}
      </ul>
    </div>
  );
};

export default FavoritesProductsPage;
