import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import classes from "./Header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { usersActions } from "../store/usersSlice";
import { NavLink } from "react-router-dom";
// variable
const cx = classNames.bind(classes);

// component
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const { cart } = useSelector((state) => state.cart);
  const totalQuantity = cart.items.reduce((total, item) => {
    return total + (item?.quantity || 0);
  }, 0);

  // get brief full name (example: nguyen duc tho => thoND)
  const getBriefFullName = (fullName) => {
    const nameParts = fullName.split(" ");
    const name = nameParts[nameParts.length - 1];
    let briefName = "";
    nameParts.slice(0, nameParts.length - 1).forEach((part) => {
      briefName += part[0].toUpperCase();
    });
    return `${name}${briefName}`;
  };

  const briefFullName = user ? getBriefFullName(user.fullName) : "";

  // handleCartClick
  const handleCartClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!user) {
      const isConfirm = window.confirm("You are not login. Login?");
      if (isConfirm) {
        navigate("/login");
      }
    }
    navigate("/cart");
  };

  // handle login/logout
  const handleLoginLogout = (e) => {
    e.preventDefault();
    if (user) {
      dispatch(usersActions.logout());
    }
    navigate("/login");
  };
  //
  return (
    <div className={cx("container py-4", "header")}>
      <div className="row ">
        <div className="col-4 d-flex">
          <NavLink
            to={"/"}
            style={{ marginRight: "10px" }}
            className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? cx("active") : "")}
          >
            Home
          </NavLink>
          <NavLink
            style={{ marginRight: "10px" }}
            className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? cx("active") : "")}
            to={"/shop"}
          >
            Shop
          </NavLink>
          {user && (
            <NavLink
              style={{ marginRight: "10px" }}
              className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? cx("active") : "")}
              to={"/orders"}
            >
              Orders
            </NavLink>
          )}
        </div>
        <div className="col-4 text-center">BOUTIQUE</div>
        <div className="col-4 d-flex justify-content-end">
          <Link to={"#"} onClick={(e) => handleCartClick(e)}>
            <div className={cx("cart")}>
              <FontAwesomeIcon icon={faCartShopping} />{" "}
              {user && <span className="text-uppercase text-danger fst-bold">{totalQuantity} </span>}Cart
            </div>
          </Link>
          <Link to={"#"}>
            <div className={cx("login", "text-black me-3")}>
              <FontAwesomeIcon icon={faUser} />
              <span>{briefFullName}</span>
            </div>
          </Link>
          <Link onClick={(e) => handleLoginLogout(e)}>
            <div className={cx("login", "text-black")}>{user ? "Logout" : "Login"}</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
