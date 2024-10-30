import { useSelector } from "react-redux";
import classNames from "classnames/bind";
import classes from "./Message.module.scss";

const cx = classNames.bind(classes);

const Message = (props) => {
  const { user } = useSelector((state) => state.auth);

  const isCurrentUser = props.message.senderId === user._id;

  return (
    <div className={cx("message-wrapper", { left: !isCurrentUser, right: isCurrentUser })}>
      <div className={cx("message", { left: !isCurrentUser, right: isCurrentUser })}>{props.message.message}</div>
    </div>
  );
};

export default Message;
