import React, { useState, useContext } from 'react';

const FavoritesContext = React.createContext();

export const FavoritesProvider = ({ children }) => {
  const favorites = useFavoritesProvider();
  return (
    <FavoritesContext.Provider value={favorites}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

const useFavoritesProvider = () => {
  const [favorites, setFavorites] = useState([]);
  return {
    favorites, 
    setFavorites
  };
};
