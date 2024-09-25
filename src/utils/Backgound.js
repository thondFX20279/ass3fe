import classNames from "classnames/bind";
import classes from "./Background.module.scss";

// variable
const cx = classNames.bind(classes);

// component
const Background = ({ children }) => {
  return (
    <div className={cx("background")} style={{ backgroundImage: 'url("/image/banner1.jpg")' }}>
      {children}
    </div>
  );
};
export default Background;
