import classNames from "classnames/bind";
import classes from "./CartList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faCaretRight, faCaretLeft, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";
// variable
const cx = classNames.bind(classes);

// component
const CartList = ({ cart, increaseHandler, decreaseHandler, deleteHandler }) => {
  const navigate = useNavigate();

  // update amount

  // add "." in price
  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  // checkout page
  const checkoutHandler = () => {
    navigate("/checkout");
  };
  // shop page
  const shoppingHandler = () => {
    navigate("/shop");
  };
  return (
    <div className={cx("cart-list", "mb-5")}>
      <h3 className="text-uppercase fw-normal">Shopping cart</h3>
      <div className="d-flex">
        <div className={cx("cart-table")}>
          <table className="text-center">
            <thead className={cx("", "bg-light")}>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.items &&
                cart.items.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <div>
                        <img src={product.image} alt="no found" />
                      </div>
                    </td>
                    <td className="fw-bold">{product.name}</td>
                    <td className="text-muted">{product.price}</td>
                    <td>
                      <div className="d-flex align-cart.items-center justify-content-center">
                        <FontAwesomeIcon
                          icon={faCaretLeft}
                          onClick={(e) => decreaseHandler(product.id, +product.quantity)}
                        />
                        <span>{product.quantity}</span>
                        <FontAwesomeIcon icon={faCaretRight} onClick={() => increaseHandler(product.id)} />
                      </div>
                    </td>
                    <td className="text-muted">{numberWithCommas(product.total)}</td>
                    <td>
                      <div onClick={() => deleteHandler(product.id)}>
                        <FontAwesomeIcon icon={faTrashCan} />
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="bg-light d-flex justify-content-between align-cart.items-center p-3 mt-3">
            <div className={cx("navigates", "d-flex align-cart.items-center p-1")} onClick={shoppingHandler}>
              <FontAwesomeIcon icon={faArrowLeft} />
              <span className="ms-2">Continue shopping</span>
            </div>
            <div
              className={cx("navigates", "d-flex align-cart.items-center border border-dark p-1")}
              onClick={checkoutHandler}
            >
              <span className="me-2">Proceed to checkout</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
        <div className={cx("cart-info")}>
          <div className={cx("info-item", "bg-light p-5")}>
            <h3 className="text-uppercase">Cart Total</h3>
            <div className="d-flex justify-content-between  border-bottom fst-italic align-cart.items-center">
              <p className="text-uppercase mb-1 fs-6">Subtotal</p>
              <span className="text-muted mb-1">{cart.items ? numberWithCommas(cart.totalPrice) : "0"} VND</span>
            </div>
            <div className="d-flex justify-content-between   fst-italic align-cart.items-center">
              <p className="text-uppercase mb-1 fs-6">Total</p>
              <span className="mb-1">{cart.items ? numberWithCommas(cart.totalPrice) : "0"} VND</span>
            </div>
            <div className={cx("cart-actions")}>
              <div className={cx("cart-form-control")}>
                <input type="text" placeholder="Enter your coupon" />
              </div>
              <button className="btn btn-dark rounded-0">Apply coupon</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
