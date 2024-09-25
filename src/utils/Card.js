import classNames from "classnames/bind";
import classes from "./Card.module.scss";

// variable
const cx = classNames.bind(classes);

// component
const Card = ({ children, className }) => {
  return <div className={cx("card", className || null)}>{children}</div>;
};
export default Card;
