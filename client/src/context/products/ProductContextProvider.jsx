import { useState } from "react";
import ProductContext from "./ProductContext";

const ProductContextProvider = ({ children }) => {
  const [product, setProduct] = useState();

  function getProduct(productArr) {
    setProduct(productArr);
  }
  return (
    <ProductContext.Provider value={{ product, getProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
