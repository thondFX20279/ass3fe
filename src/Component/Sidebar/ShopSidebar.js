import classNames from "classnames/bind";
import classes from "./ShopSidebar.module.scss";
import { useState } from "react";

const categoriesLists = [
  { listItems: [{ id: 1, value: "all" }] },
  {
    listName: "Iphone & mac",
    listItems: [
      { id: 2, value: "iphone" },
      { id: 3, value: "ipad" },
      { id: 4, value: "macbook" },
    ],
  },
  {
    listName: "Wireless",
    listItems: [
      { id: 5, value: "airpod" },
      { id: 6, value: "watch" },
    ],
  },
  {
    listName: "Other",
    listItems: [
      { id: 7, value: "mouse" },
      { id: 8, value: "keyboard" },
      { id: 9, value: "other" },
    ],
  },
];
// variable
const cx = classNames.bind(classes);

// component sidebar
const ShopSidebar = (props) => {
  const [isActive, setIsActive] = useState(1);

  const onClickHandler = (item) => {
    setIsActive(item.id);
    props.onGetProductName(item.value);
  };

  return (
    <div className={cx("sidebar")}>
      <h5 className="fs-5 text-uppercase">Categories</h5>
      <ul className={cx("sidebar-nav", "d-flex flex-column fst-italic")}>
        <li>
          <div className="text-uppercase bg-dark text-white ps-3">Apple</div>
        </li>
        {categoriesLists.map((categories, index) => (
          <ul className={cx("items")} key={index}>
            {categories.listName && <li className="bg-light text-uppercase fw-bold">{categories.listName}</li>}
            {categories.listItems.map((item) => (
              <li key={item.id} className={cx("item", { active: item.id === isActive })} onClick={() => onClickHandler(item)}>
                {item.value}
              </li>
            ))}
          </ul>
        ))}
      </ul>
    </div>
  );
};
export default ShopSidebar;
