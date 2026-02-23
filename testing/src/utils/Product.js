import React, { useEffect, useState } from "react";
import { fetchProduct } from "../api/ProductApi";

function Product() {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const loadProduct = async () => {
      const data = await fetchProduct();
      setProduct(data);
    };

    loadProduct();
  }, []);

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default Product;
