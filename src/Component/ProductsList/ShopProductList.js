import classNames from "classnames/bind";
import classes from "./ShopProductList.module.scss";
import ProductItem from "../ProductItem/ProductItem";
// varibale
const cx = classNames.bind(classes);

// component
const ShopProductList = (props) => {
  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div className={cx("content")}>
      <div className={cx("search", "d-flex justify-content-between mb-3")}>
        <input type="text" placeholder="Search" />
        <select>
          <option>Default sorting</option>
        </select>
      </div>
      <div className={cx("items")}>
        {props.products &&
          props.products.map((item, index) => <ProductItem key={index} item={item} onShowPopup={false} price={numberWithCommas(item.price)} />)}
      </div>
    </div>
  );
};
export default ShopProductList;
