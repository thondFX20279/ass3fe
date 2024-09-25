import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import classes from "./ProductItem.module.scss";
const cx = classNames.bind(classes);
const ProductItem = ({ item, onShowPopup, price }) => {
  const navigate = useNavigate();
  const handleClick = (item) => {
    if (onShowPopup) {
      onShowPopup(item);
    } else {
      navigate(`/detail/${item._id}`);
    }
  };
  return (
    <div className={cx("product-item")}>
      <Link key={item["_id"]} onClick={() => handleClick(item)}>
        <div className={cx("item")}>
          <div className={cx("item-img")}>
            <img src={item.img1} alt="No found" />
          </div>
          <div className={cx("item-info", "text-center")}>
            <p>{item.name}</p>
            <span className="text-muted">{price}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default ProductItem;
