import { useState } from "react";
import FavContext from "./FavContext";

const FavContextProvider = ({ children }) => {
  const [fav, setFav] = useState([]);

  const addToFav = (itemId) => {
    setFav([...fav, itemId]);
  };

  const removeFromFav = (itemId) => {
    setFav(fav.filter((item) => item !== itemId));
  };
  return (
    <FavContext.Provider value={{ fav, addToFav, removeFromFav }}>
      {children}
    </FavContext.Provider>
  );
};

export default FavContextProvider;
