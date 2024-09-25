import Avatar from "./avata";
import ChatWindow from "./ChatWindow";
import classes from "./SupportChat.module.scss";
import { useState } from "react";
const SupportChat = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className={classes.chat}>
      {isShow && <ChatWindow />}
      <Avatar onClick={() => setIsShow((pre) => !pre)} />
    </div>
  );
};

export default SupportChat;
