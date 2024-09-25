import classNames from "classnames/bind";
import classes from "./Login.module.scss";
import LoginForm from "../Component/Form/LoginForm";
import Background from "../utils/Backgound";

// variable
const cx = classNames.bind(classes);

// component
const Login = () => {
  return (
    <div className={cx("login")}>
      <Background>
        <LoginForm />
      </Background>
    </div>
  );
};
export default Login;
