import { useEffect, useState } from "react";
import ShopAndCartBanner from "../../Component/Banner/ShopAndCartBanner";
import ShopSidebar from "../../Component/Sidebar/ShopSidebar";
import ShopProductList from "../../Component/ProductsList/ShopProductList";
import productApi from "../../api/productApi";

const Shop = () => {
  const [productsName, setProductsName] = useState("all");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await productApi.getProducts({ page: 1 });
        if (productsName === "all") {
          setProducts(res.data.products);
          return;
        }
        const filterData = res.data.products.filter((item) => item.category === productsName);
        setProducts(filterData);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, [productsName]);
  const getProductNameHandler = (name) => {
    setProductsName(name);
  };
  return (
    <div className="container">
      <ShopAndCartBanner title={"shop"} />
      <div className="d-flex mb-5">
        <ShopSidebar onGetProductName={getProductNameHandler} />
        <ShopProductList products={products} />
      </div>
    </div>
  );
};
export default Shop;
