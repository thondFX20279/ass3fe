import { useSelector } from "react-redux";
import Avatar from "./avata";
import ChatWindow from "./ChatWindow";
import classes from "./SupportChat.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SupportChat = () => {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const showChatHandler = () => {
    if (!user) {
      const confirm = window.confirm("You are not login");
      if (!confirm) return;
      navigate("/login");
    }
    setIsShow((pre) => !pre);
  };
  return (
    <div className={classes.chat}>
      {isShow && <ChatWindow />}
      <Avatar onClick={showChatHandler} />
    </div>
  );
};

export default SupportChat;
