import classNames from "classnames/bind";
import classes from "./CheckoutForm.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import orderApi from "../../api/orderApi";
import { cartActions } from "../../store/cartSlice";
import { useState } from "react";

// variable
const cx = classNames.bind(classes);

// component
const CheckoutForm = ({ cart }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  // Sử dụng react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: user?.fullName || "",
      email: user?.email || "",
      phone: "",
      address: "",
    },
  });

  // Submit handler
  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const res = await orderApi.createOrders({ ...data, email: user.email, totalPrice: cart.totalPrice });
      if (res.data.success) {
        dispatch(cartActions.clearCart());
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      }
    }
    setIsLoading(false);
  };

  // add "." in price
  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div className={cx("checkout-form", "mt-5 mb-5 fst-italic")}>
      <h4 className="text-uppercase">Billing detail</h4>
      <div className="d-flex">
        {/* form */}
        <div className={cx("form")}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* full name */}
            <div className={cx("form-control")}>
              <label htmlFor="fullName">Full name:</label>
              <input
                id="fullName"
                type="text"
                placeholder="Enter your full name here"
                {...register("fullName", { required: "Full name is required" })}
              />
              {errors.fullName && <p className="text-danger">{errors.fullName.message}</p>}
            </div>

            {/* email */}
            <div className={cx("form-control")}>
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="text"
                placeholder="Enter your email here"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
              />
              {errors.email && <p className="text-danger">{errors.email.message}</p>}
            </div>

            {/* phone */}
            <div className={cx("form-control")}>
              <label htmlFor="phone">Phone number:</label>
              <input
                id="phone"
                type="number"
                placeholder="Enter your phone number here"
                min={0}
                {...register("phone", { required: "Phone number is required" })}
              />
              {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
            </div>

            {/* address */}
            <div className={cx("form-control")}>
              <label htmlFor="address">Address:</label>
              <input
                id="address"
                type="text"
                placeholder="Enter your address here"
                {...register("address", { required: "Address is required" })}
              />
              {errors.address && <p className="text-danger">{errors.address.message}</p>}
            </div>

            {/* actions */}
            <div className={cx("form-actions")}>
              <button className="btn btn-dark rounded-0" disabled={isLoading} type="submit">
                Place order
              </button>
            </div>
          </form>
        </div>

        {/* info */}
        <div className={cx("info", "ms-4 fst-italic")}>
          <div className="bg-light p-5">
            <h4 className="text-uppercase">Your order</h4>
            {cart.items.length !== 0 &&
              cart.items.map((product) => (
                <div className="d-flex justify-content-between  border-bottom" key={product.id}>
                  <p className={cx("name", "mb-1 me-1")}>{product.name}</p>
                  <span className="text-muted mb-1">
                    {numberWithCommas(product.price)} VND x {product.quantity}
                  </span>
                </div>
              ))}
            <div className="d-flex justify-content-between ">
              <p className="text-uppercase mb-0">Total</p>
              <span className="fs-6">{cart.items.length !== 0 ? `${numberWithCommas(cart.totalPrice)} VND` : 0}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
