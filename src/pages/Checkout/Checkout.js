import { useEffect, useState } from "react";
import cartApi from "../../api/cartApi";
import ShopAndCartBanner from "../../Component/Banner/ShopAndCartBanner";
import CheckoutForm from "../../Component/Form/CheckoutForm";
const Checkout = () => {
  const [cartData, setCartData] = useState({ items: [] });
  const getCart = async () => {
    const res = await cartApi.getCart();
    if (res.data.success) {
      setCartData(res.data.cart);
    } else {
      setCartData({ items: [], totalPrice: 0 });
    }
  };
  useEffect(() => {
    getCart();
  }, []);
  return (
    <div className="container">
      <ShopAndCartBanner title={"Checkout"} />
      <CheckoutForm cart={cartData} />
    </div>
  );
};
export default Checkout;
