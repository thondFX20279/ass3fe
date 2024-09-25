import classNames from "classnames/bind";
import classes from "./ProductPopup.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
// '
const cx = classNames.bind(classes);

const Popup = (props) => {
  const navigate = useNavigate();
  const closeModalHandler = (e) => {
    e.stopPropagation();
    props.onClose();
  };
  const handleClick = () => {
    props.onClose();
    navigate(`/detail/${props["_id"]}`);
  };
  return (
    <>
      <div className={cx("back-drop")} onClick={props.onClose}></div>
      <div className={cx("popup")}>
        <span className={cx("close")} onClick={closeModalHandler}>
          &#x2716;
        </span>
        <div className={cx("img")}>
          <img src={props.img1} alt="No found" />
        </div>
        <div className={cx("info", "fst-italic")}>
          <h4 className={cx("name")}>{props.name}</h4>
          <span className={cx("price")}>{props.price}</span>
          <p className={cx("description")}>{props["short_desc"]}</p>
          <Link onClick={handleClick}>
            <button className="btn btn-dark">
              <FontAwesomeIcon icon={faCartShopping} />
              <span className="fst-italic" style={{ marginLeft: "5px" }}>
                View Detail
              </span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Popup;
