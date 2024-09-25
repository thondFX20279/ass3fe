import classNames from "classnames/bind";
import classes from "./LoginForm.module.scss";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../utils/Card";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../../store/usersSlice";
import { cartActions } from "../../store/cartSlice";
// variable
const cx = classNames.bind(classes);

// component
const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Sử dụng React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Xử lý submit form
  const submitHandler = async (data) => {
    const action = await dispatch(login(data));
    if (login.fulfilled.match(action)) {
      dispatch(cartActions.login(action.payload.user));
      navigate("/");
    } else {
      alert(action.payload);
    }
  };

  return (
    <Card>
      <form className="mb-3" onSubmit={handleSubmit(submitHandler)}>
        <h2 className={cx("title", "text-center mb-3 fst-italic fw-normal text-muted")}>Sign in</h2>

        {/* Email Input */}
        <div className={cx("form-control", "rounded-0")}>
          <label htmlFor="email">Email</label>

          <input
            type="text"
            id="email"
            name="email"
            {...register("email", { required: "Email is required", pattern: "" })}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        </div>
        <div className={cx("form-control", "rounded-0")}>
          <label htmlFor="password">Password</label>

          <input
            type="password"
            id="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
        </div>

        {/* Submit Button */}
        <div className={cx("form-actions")}>
          <button type="submit" className="btn btn-dark">
            Login
          </button>
        </div>
      </form>

      <div className={cx("extra", "text-center")}>
        <p className="text-muted">
          Create an account?{" "}
          <Link to="/register">
            <span className="text-primary">Sign up</span>
          </Link>
        </p>
      </div>
    </Card>
  );
};

export default LoginForm;
