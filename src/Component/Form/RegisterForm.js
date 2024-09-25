import classNames from "classnames/bind";
import classes from "./RegisterForm.module.scss";
import Card from "../../utils/Card";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../../api/axiosClient";
import { useForm } from "react-hook-form";
// variable
const cx = classNames.bind(classes);

// component

const RegisterForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const submitHandler = async (data) => {
    try {
      const res = await axiosClient.post("/auth/signup", data);
      if (res.status === 201) {
        alert(res.data.message);
        navigate("/login");
      }
    } catch (errs) {
      if (errs.response) {
        const { data } = errs.response;
        alert(data.message);
      } else {
        alert("Something went wrong");
      }
    }
  };

  const loginHandler = (e) => {
    e.preventDefault();

    navigate("/login");
  };

  return (
    <Card>
      <form className="mb-2" onSubmit={handleSubmit(submitHandler)}>
        <h2 className={cx("title", "text-center mb-2 fst-italic fw-normal text-muted")}>Sign up</h2>
        <div className={cx("form-control", "rounded-0")}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" {...register("username", { required: "Username is required" })} />
          {errors.username && <p style={{ color: "red" }}>{errors.username.message}</p>}
        </div>
        <div className={cx("form-control", "rounded-0")}>
          <label htmlFor="fullName">Full name</label>
          <input type="text" id="fullName" {...register("fullName", { required: "FullName is required" })} />
          {errors.fullName && <p style={{ color: "red" }}>{errors.fullName.message}</p>}
        </div>

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
        <div className={cx("form-control", "rounded-0")}>
          <label htmlFor="confirmPassword">ConfirmPassword</label>

          <input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword", {
              required: "Confirm password is required",
              validate: (value) => value === watch("password") || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>}
        </div>
        <div className={cx("form-actions")}>
          <button type="submit" className="btn btn-dark">
            SIGN UP
          </button>
        </div>
      </form>
      <div className={cx("extra", "text-center")}>
        <p className="text-muted fst-italic">
          Login?
          <Link onClick={loginHandler}>
            <span className="text-primary"> Click</span>
          </Link>
        </p>
      </div>
    </Card>
  );
};
export default RegisterForm;
