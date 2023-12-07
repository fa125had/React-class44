import React, { createContext, useState, useContext } from "react";

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  return (
    <FavoriteContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = (productId) => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("Error using context");
  }

  const { favorites, setFavorites } = context;
  const isFavorite = favorites.includes(productId);

  const toggleFavorite = () => {
    if (isFavorite) {
      setFavorites(favorites.filter((id) => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  return { favorites, setFavorites, isFavorite, toggleFavorite };
};
