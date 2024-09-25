import Banner from "../../Component/Banner/HomeBanner";
import CategoryList from "../../Component/CategoryList/CategoryList";
import HomeProductsList from "../../Component/ProductsList/HomeProductsList";
import Contact from "../../Component/Contact/Contact";
import { useEffect, useState } from "react";
import productApi from "../../api/productApi";
const Home = () => {
  const [categories, setCategories] = useState([]);
  const [topTrending, setTopTrengding] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const res = await productApi.getCategories();
      if (res.data.success === true) {
        setCategories(res.data.categories);
      } else {
        setCategories([]);
      }
    };
    const getTopTrending = async () => {
      const res = await productApi.getTopTrending();
      if (res.data.success === true) {
        setTopTrengding(res.data.topTrending);
      } else {
        setTopTrengding([]);
      }
    };
    getCategories();
    getTopTrending();
  }, []);
  return (
    <div className="container">
      <Banner />
      <CategoryList categories={categories} />
      <HomeProductsList products={topTrending} />
      <Contact />
    </div>
  );
};
export default Home;
