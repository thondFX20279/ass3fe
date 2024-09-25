import classNames from "classnames/bind";
import classes from "./Register.module.scss";
import RegisterForm from "../Component/Form/RegisterForm";
import Background from "../utils/Backgound";
// variable
const cx = classNames.bind(classes);

// page
const Register = () => {
  return (
    <div className={cx("register")}>
      <Background>
        <RegisterForm />
      </Background>
    </div>
  );
};
export default Register;
