import classNames from "classnames/bind";
import classes from "./ChatWindow.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import ChatList from "./ChatList";
import { useState } from "react";
const cx = classNames.bind(classes);
const ChatWindow = (props) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const addMessageHandler = () => {
    if (message.trim()) {
      setMessages((pre) => [...pre, message]);
      setMessage("");
    }
  };
  const keyDownHandler = (e) => {
    if (e.keyCode === 13) {
      addMessageHandler();
    }
  };
  return (
    <div className={cx("chat-window", "d-flex flex-column")}>
      <div className={cx("header", "p-3")}>
        <div className="fw-bold">Customer Support</div>
        <div className="bg-light px-3 fst-italic" style={{ fontSize: "0.8rem" }}>
          Let's Chat App
        </div>
      </div>
      <ChatList chatList={messages} />
      <div className={cx("form", "p-3")}>
        <input type="text" placeholder="Enter message" value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={keyDownHandler} />
        <button onClick={addMessageHandler}>
          <span>
            <FontAwesomeIcon icon={faPaperPlane} style={{ color: "blue" }} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
