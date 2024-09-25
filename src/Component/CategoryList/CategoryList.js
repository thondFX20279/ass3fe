import classNames from "classnames/bind";
import classes from "./Category.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(classes);
const CategoryList = ({ categories }) => {
  return (
    <div className="p-5 bg-light mb-5">
      <div className="text-center text-uppercase fst-italic">
        <p className="text-muted">Carefully create collections</p>
        <h6 className="fs-6">Browse out categories</h6>
      </div>
      <div className={cx("categories-img")}>
        {categories &&
          categories.map((catgory, index) => (
            <Link to={"/shop"} key={index}>
              <div className={cx("item", "me-3")}>
                <img src={catgory?.product?.img1} alt="no Found" />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};
export default CategoryList;
