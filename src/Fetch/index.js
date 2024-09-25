// fetch products list

import axios from "axios";

export const getProductsLoader = async () => {
  // const data = await
  const res = await axios.get(
    "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
  );
  if (!res.data) {
    console.log("fetch products list error");
  
  }
  const data = await res.data;
 
  return data;
};
