import { useEffect, useState } from "react";
import ShopAndCartBanner from "../../Component/Banner/ShopAndCartBanner";
import CartList from "../../Component/CartList/CartList";
import cartApi from "../../api/cartApi";
import { cartActions } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
const Cart = () => {
  const dispatch = useDispatch();
  const getCart = async () => {
    try {
      const res = await cartApi.getCart();
      if (res.data.success) {
        setCartData(res.data.cart);
      } else {
        setCartData({ items: [], totalPrice: 0 });
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const [cartData, setCartData] = useState({ items: [], totalPrice: 0 });

  const increaseHandler = async (productId) => {
    dispatch(cartActions.increaseCart(productId));
    await cartApi.increaseQuantity(productId);
    getCart();
  };
  const decreaseHandler = async (productId, quantity) => {
    if (quantity !== 1) {
      dispatch(cartActions.decreaseCart(productId));
      await cartApi.decreaseQuantity(productId);
      getCart();
    }
  };

  // delete handler
  const deleteHandler = async (productId) => {
    // dispatch action delete
    dispatch(cartActions.removeFromCart(productId));
    await cartApi.removeProduct(productId);
    getCart();
  };
  useEffect(() => {
    getCart();
  }, []);
  return (
    <div className="container">
      <ShopAndCartBanner title={"cart"} />
      <CartList
        cart={cartData}
        increaseHandler={increaseHandler}
        decreaseHandler={decreaseHandler}
        deleteHandler={deleteHandler}
      />
    </div>
  );
};
export default Cart;
