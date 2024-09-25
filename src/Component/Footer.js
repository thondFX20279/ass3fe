import classNames from "classnames/bind";
import classes from "./Footer.module.scss";
const cx = classNames.bind(classes);
const Footer = () => {
  return (
    <div className={cx("footer", "container-fluid")}>
      <div className="container py-5">
        <div className="row fst-italic">
          <div className="col-4">
            <h5 className="text-white fs-6 text-uppercase mb-4 fw-normal">Customer Services</h5>
            <div className={`${cx("text-gray")} d-flex flex-column`}>
              <a href="#">Help & Contact</a>
              <a href="#">Return & Refunds</a>
              <a href="#">Online Stores</a>
              <a href="#">Terms & Condition</a>
            </div>
          </div>

          <div className="col-4">
            <h5 className="text-white fs-6 text-uppercase mb-4 fw-normal">Customer Services</h5>
            <div className={`${cx("text-gray")} d-flex flex-column`}>
              <a href="#">Help & Contact</a>
              <a href="#">Return & Refunds</a>
              <a href="#">Online Stores</a>
              <a href="#">Terms & Condition</a>
            </div>
          </div>

          <div className="col-4">
            <h5 className="text-white fs-6 text-uppercase mb-4 fw-normal">Customer Services</h5>
            <div className={`${cx("text-gray")} d-flex flex-column`}>
              <a href="#">Help & Contact</a>
              <a href="#">Return & Refunds</a>
              <a href="#">Online Stores</a>
              <a href="#">Terms & Condition</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
