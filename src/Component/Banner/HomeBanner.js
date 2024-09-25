import classNames from "classnames/bind";
import classes from "./HomeBanner.module.scss";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(classes);

const Banner = () => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/shop");
  };

  return (
    <div className={cx("banner", "mb-5")}>
      <div className={cx("banner-img")}>
        <img src="/image/banner1.jpg" alt="no found" />
      </div>
      <div className={cx("banner-content")}>
        <p className="text-uppercase text-secondary fs-6">New inspiration 2020</p>
        <h2 className="text-uppercase fst-italic fw-normal">20% off on new season</h2>
        <button className="btn btn-dark" onClick={onClickHandler}>
          Browse Collection
        </button>
      </div>
    </div>
  );
};
export default Banner;
