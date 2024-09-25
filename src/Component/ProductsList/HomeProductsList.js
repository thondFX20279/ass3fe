import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";
import classes from "./HomeProductsList.module.scss";
import Popup from "../ProductPopup/ProductPopup";
import { hidePopup, showPopup } from "../../store/productPopupSlice";
import ProductItem from "../ProductItem/ProductItem";

// variable
const cx = classNames.bind(classes);

// component
const HomeProductsList = ({ products }) => {
  const dispatch = useDispatch();
  const { product, isShown } = useSelector((state) => state.popup);

  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  // show popup
  const showPopupHandler = (product) => {
    dispatch(showPopup(product));
  };

  // hide popup
  const hidePopupHandler = () => {
    dispatch(hidePopup());
  };

  return (
    <div className={cx("trending-products", "mb-5")}>
      <div className={cx("title", "text-uppercase fst-italic")}>
        <p className="text-muted mb-0">Made the hard way</p>
        <h3 className="fw-normal">Top trending products</h3>
      </div>

      <div className={cx("products-items")}>
        {products &&
          products.map((item, index) => (
            <ProductItem item={item} onShowPopup={showPopupHandler} key={index} price={numberWithCommas(item.price)} />
          ))}
      </div>

      {isShown && <Popup onClose={hidePopupHandler} {...product} price={numberWithCommas(product.price)} />}
    </div>
  );
};
export default HomeProductsList;
