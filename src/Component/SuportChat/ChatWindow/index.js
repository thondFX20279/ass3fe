import classNames from "classnames/bind";
import classes from "./ChatWindow.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import ChatList from "./ChatList";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";
import axiosClient from "../../../api/axiosClient";
const cx = classNames.bind(classes);
const ChatWindow = (props) => {
  const { user } = useSelector((state) => state.auth);
  const socket = io("https://ass3be.onrender.com/");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axiosClient.get("/session/room", { params: { userId: user._id } });
        const { room } = response.data;
        setMessages(room.messages || []);
      } catch (error) {
        console.error("Failed to fetch messages", error);
      }
    };

    fetchMessages();
    socket.on("receiveMessage", (data) => {
      setMessages((prevMessages) => [...prevMessages, { senderId: data.senderId, message: data.message }]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);
  const addMessageHandler = () => {
    if (message.trim()) {
      socket.emit("sendMessage", { message, userId: user._id, senderId: user._id });
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
        <input
          type="text"
          placeholder="Enter message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={keyDownHandler}
        />
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
