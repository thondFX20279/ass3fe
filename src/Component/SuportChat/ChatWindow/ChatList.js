import React, { useRef, useEffect } from "react";
import Message from "./Message";

const ChatList = ({ chatList }) => {
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [chatList]);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ flex: "1", display: "flex", flexDirection: "column", overflowY: "auto" }} className="p-3">
      {chatList.map((message, index) => (
        <Message key={index} message={message} />
      ))}
      <div ref={endOfMessagesRef} />
    </div>
  );
};

export default ChatList;
